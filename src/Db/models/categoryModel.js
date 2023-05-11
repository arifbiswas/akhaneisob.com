import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
})

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;