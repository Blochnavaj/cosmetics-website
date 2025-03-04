import express from "express";
import { addToCart, updateToCart, getUserCart } from "../Controllers/CartControllers.js";
import authUser from "../Middleware/auth.js";

const router = express.Router();

router.post("/add", authUser, addToCart);
router.put("/update", authUser, updateToCart);
router.get("/get", authUser, getUserCart);

export default router;
