import express  from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  connectDB  from './Config/db.js';
import connectClodinary from './Config/cloudinary.js';
import userRouter from './Routes/userRoute.js';

dotenv.config();

//App config 
const app = express();
const port = process.env.PORT;
connectDB()
connectClodinary()


//middleware
app.use(express.json());
app.use(cors());


//api endpint 
app.use('/api/user',userRouter); // ------> (/api/user/)


//port listing 
app.listen(port,() => console.log(`server running on port ${port}`));