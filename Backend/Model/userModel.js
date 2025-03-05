import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Array,
        default: []
    }
}, { minimize: false });

const userModel = mongoose.models.user || mongoose.model('User', UserSchema);

export default userModel;
