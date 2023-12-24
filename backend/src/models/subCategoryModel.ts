import mongoose from "mongoose";
const { Schema } = mongoose;

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the sub category's name"],
    trim: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
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

const SubCategory = mongoose.model("subCategory", subCategorySchema);

export default SubCategory;
