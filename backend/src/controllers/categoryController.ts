import { catchAsyncError } from "../middleware/catchAsyncError";
import Category from "../models/categoryModel";

// catchAsyncError: for auto try catch use catchAsyncError to catch errors
// ---------------------------------------------------------------------------------------------------->>
// For Adding Categories

// route: POST /api/v1/category
const addCategory = catchAsyncError(async (req, res) => {
  await Category.create(req.body);

  res
    .status(201)
    .json({ success: true, message: "Category added Successfully!" });
});

// ---------------------------------------------------------------------------------------------------->>

// ---------------------------------------------------------------------------------------------------->>
// For Getting all category list

// route: GET /api/v1/category
const getAllCategory = catchAsyncError(async (req, res) => {
  // getting total category number from database
  const totalCategories = await Category.countDocuments();

  if (totalCategories === 0) {
    return res.status(204).json({ success: false, message: "No categories found!" });
  }
  //  get all categories from the database
  const categories = await Category.find().select("-__v");

  res.status(200).json({ success: true, data: categories });
});

// ---------------------------------------------------------------------------------------------------->>

// ---------------------------------------------------------------------------------------------------->>
// For updating Category

// route: PATCH /api/v1/category
const updateCategory = catchAsyncError(async (req, res) => {
  let category = await Category.findById(req.params.id);

  // If category does not exist
  if (!category) {
    res.status(404);
    throw new Error("Category not found!");
  }

  category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res
    .status(200)
    .json({ success: true, message: "Category Updated Successfully!" });
});

// ---------------------------------------------------------------------------------------------------->>

// ---------------------------------------------------------------------------------------------------->>
// For Deleting Category

// route: DELETE /api/v1/category
const deleteCategory = catchAsyncError(async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);

  // If category does not exist
  if (!category) {
    res.status(404);
    throw new Error("Category not found!");
  }

  res
    .status(200)
    .json({ success: true, message: "Category Deleted Successfully!" });
});

// ---------------------------------------------------------------------------------------------------->>

export { addCategory, getAllCategory, updateCategory, deleteCategory };
