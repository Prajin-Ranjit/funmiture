import Express from "express";
import {
  addSubCategory,
  deleteSubCategory,
  getSubCategory,
  updateSubCategory,
} from "../controllers/subCategoryController";
const router = Express.Router();

router.route("/sub_category").post(addSubCategory).get(getSubCategory);
// for dynamic routes
router
  .route("/sub_category/:id")
  .patch(updateSubCategory)
  .delete(deleteSubCategory);

export default router;
