import { catchAsyncError } from "../middleware/catchAsyncError";
import Category from "../models/categoryModel";
import SubCategory from "../models/subCategoryModel";

// catchAsyncError: for auto try catch use catchAsyncError to catch errors
// ---------------------------------------------------------------------------------------------------->>
// For Adding Sub Categories

// route: POST /api/v1/sub_category
const addSubCategory = catchAsyncError(async (req, res) => {
  // checking if the category exists before adding the sub category
  const category = await Category.findById(req.body.category);

  if (!category) {
    res.status(404);
    throw new Error("Selected Category doesnt exist!");
  }

  await SubCategory.create(req.body);

  res
    .status(201)
    .json({ success: true, message: "Sub Category created successfully" });
});

// ---------------------------------------------------------------------------------------------------->>

// ---------------------------------------------------------------------------------------------------->>
// For Getting Sub Categories

// route: GET /api/v1/sub_category
const getSubCategory = catchAsyncError(async (req, res) => {
  // getting total sub category number from database
  const totalSubCategories = await SubCategory.countDocuments();

  if (totalSubCategories === 0) {
    return res
      .status(204)
      .json({ success: false, message: "No sub categories found!" });
  }

  //  get all sub categories from the database
  const subCategories = await SubCategory.find()
    .populate({ path: "category", model: "Category", select: "-__v -images" })
    .select("-__v");

  res.status(200).json({ success: true, data: subCategories });
});

// ---------------------------------------------------------------------------------------------------->>

// ---------------------------------------------------------------------------------------------------->>
// For updating Sub Categories

// route: PATCH /api/v1/sub_category
const updateSubCategory = catchAsyncError(async (req, res) => {
  let subCategory = await SubCategory.findById(req.params.id);

  // If sub category does not exist
  if (!subCategory) {
    res.status(404);
    throw new Error("Sub Category not found!");
  }

  //   checking if the category exists before adding the sub category
  const category = await Category.findById(req.body.category);

  if (!category) {
    res.status(404);
    throw new Error("Selected Category doesnt exist!");
  }

  subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res
    .status(200)
    .json({ success: true, message: "Sub Category Updated Successfully!" });
});

// ---------------------------------------------------------------------------------------------------->>

// ---------------------------------------------------------------------------------------------------->>
// For Deleting Sub Category

// route: DELETE /api/v1/sub_category
const deleteSubCategory = catchAsyncError(async (req, res) => {
  const subCategory = await SubCategory.findByIdAndDelete(req.params.id);

  // If subCategory does not exist
  if (!subCategory) {
    res.status(404);
    throw new Error("Sub Category not found!");
  }

  res
    .status(200)
    .json({ success: true, message: "Sub Category Deleted Successfully!" });
});

// ---------------------------------------------------------------------------------------------------->>

export { addSubCategory, getSubCategory, updateSubCategory, deleteSubCategory };
