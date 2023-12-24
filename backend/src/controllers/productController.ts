import { catchAsyncError } from "../middleware/catchAsyncError";
import Product from "../models/productModel";

// ---------------------------------------------------------------------------------------------------->>
// For Adding Product

// route: POST /api/v1/products
// for auto try catch use catchAsyncError to catch errors
const addProduct = catchAsyncError(async (req, res) => {
  await Product.create(req.body);

  res
    .status(201)
    .json({ success: true, message: "Product added Successfully!" });
});

// ---------------------------------------------------------------------------------------------------->>

// ---------------------------------------------------------------------------------------------------->>
// For getting Product

// route: GET /api/v1/products
// for auto try catch use catchAsyncError to catch errors
const getProduct = catchAsyncError(async (req, res) => {
  res.status(200).json({
    success: true,
  });
});

// ---------------------------------------------------------------------------------------------------->>

export { addProduct, getProduct };
