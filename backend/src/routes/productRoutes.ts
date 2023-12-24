import Express from "express";
import { addProduct, getProduct } from "../controllers/productController";
const router = Express.Router();

router.route("/products").get(getProduct).post(addProduct);

export default router;
