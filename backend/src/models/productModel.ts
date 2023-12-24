import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the product's name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Enter the product's description"],
  },
  price: {
    type: Number,
    required: [true, "Enter the product's price"],
    maxLength: [8, "The product's price cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Enter the product's category"],
  },
  subCategory: {
    type: String,
    required: [true, "Enter the product's sub category"],
  },
  stock: {
    type: Number,
    required: [true, "Enter the product's stock"],
    maxLength: [4, "The product's stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
