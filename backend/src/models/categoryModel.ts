import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the category's name"],
    trim: true,
  },
  mainCategory: {
    type: String,
    required: [true, "Enter the main category's name"],
  },
  images: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
