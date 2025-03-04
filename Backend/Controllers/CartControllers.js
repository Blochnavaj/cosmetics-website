import userModel from "../Model/userModel.js";

// 📌 Add Product to Cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, price } = req.body;

        const user = await userModel.findById(userId);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        let cartItem = user.cartData.find(item => item.itemId.toString() === itemId);
        
        if (cartItem) {
            cartItem.quantity += 1; // Increase quantity
        } else {
            user.cartData.push({ itemId, price, quantity: 1 });
        }

        await user.save();
        return res.status(200).json({ success: true, message: "Product added to cart", cart: user.cartData });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// 📌 Update Cart Quantity
const updateToCart = async (req, res) => {
    try {
        const { userId, itemId, action } = req.body;
        const user = await userModel.findById(userId);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        let cartItem = user.cartData.find(item => item.itemId.toString() === itemId);
        
        if (!cartItem) return res.status(400).json({ success: false, message: "Item not in cart" });

        if (action === "increase") {
            cartItem.quantity += 1;
        } else if (action === "decrease") {
            cartItem.quantity -= 1;
            if (cartItem.quantity <= 0) {
                user.cartData = user.cartData.filter(item => item.itemId.toString() !== itemId);
            }
        }

        await user.save();
        return res.status(200).json({ success: true, message: "Cart updated", cart: user.cartData });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// 📌 Get User Cart
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await userModel.findById(userId).populate("cartData.itemId");

        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        return res.status(200).json({ success: true, cart: user.cartData });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { addToCart, updateToCart, getUserCart };
