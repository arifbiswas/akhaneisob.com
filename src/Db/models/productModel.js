import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    description: {
        type: String,
        required: true
        },
    img: {
        type: String,
        required: true
        },
    category: {
        type: String,
        required: true
        },
    url : {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date
    },
    isDeleted: {
        type: Boolean,
        default: false
    },

})

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;