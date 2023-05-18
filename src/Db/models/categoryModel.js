import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: String,
  description: String,
  imgUrl: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
