import Express from "express";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../controllers/categoryController";
const router = Express.Router();

router.route("/category").post(addCategory).get(getAllCategory);
// for dynamic routes
router.route("/category/:id").patch(updateCategory).delete(deleteCategory);

export default router;
