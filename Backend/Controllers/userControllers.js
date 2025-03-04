import User from '../Model/userModel.js';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const createToken = (id) => {
   return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
};

// 🔹 LOGIN USER
const loginUser = async (req, res) => {
   try {
      const { email, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
         return res.status(400).json({ success: false, message: "User doesn't exist" });
      }

      // Compare passwords
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
         return res.status(400).json({ success: false, message: "Invalid credentials" });
      }

      // Generate JWT Token
      const token = createToken(user._id);
      return res.status(200).json({
         success: true,
         message: "User login successful",
         token
      });

   } catch (error) {
      console.error("Error in loginUser:", error);
      res.status(500).json({ success: false, message: 'Internal server error' });
   }
};

// 🔹 REGISTER USER
const registerUser = async (req, res) => {
   try {
      const { name, email, password } = req.body;

      // 1️⃣ Validate input fields
      if (!name || !email || !password) {
         return res.status(400).json({ success: false, message: "All fields are required" });
      }

      // 2️⃣ Validate email format
      if (!validator.isEmail(email)) {
         return res.status(400).json({ success: false, message: "Please enter a valid email" });
      }

      // 3️⃣ Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
         return res.status(409).json({ success: false, message: "User already exists" });
      }

      // 4️⃣ Validate password strength
      if (password.length < 8) {
         return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
      }

      // 5️⃣ Hash password before saving
      const hashPassword = await bcryptjs.hash(password, 10);

      // 6️⃣ Create new user
      const newUser = new User({ name, email, password: hashPassword });
      await newUser.save();

      // 7️⃣ Generate JWT Token
      const token = createToken(newUser._id);

      res.status(201).json({ success: true, message: "User registered successfully", token });
   } catch (error) {
      console.error("Error in registerUser:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
   }
};

// 🔹 ADMIN LOGIN
const adminLogin = async (req, res) => {
   try {
      const { email, password } = req.body;

      // Check if credentials match environment variables
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
         // Sign token with an object payload and include an admin flag
         const token = jwt.sign(
            { email: email, isAdmin: true },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "30d" }
         );

         return res.status(200).json({
            success: true,
            message: "Admin login successful",
            token
         });
      } else {
         return res.status(400).json({
            success: false,
            message: "Invalid credentials",
         });
      }
   } catch (error) {
      console.error("Error in adminLogin:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
   }
};

export { registerUser, loginUser, adminLogin };
