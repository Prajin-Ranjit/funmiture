import express from "express";
import dotenv from "dotenv";
import { credentials } from "./middleware/credentials";
import corsOptions from "./config/corsOptions";
import cors from "cors";
import { errorHandler, notFound } from "./middleware/errorMiddleware";
dotenv.config();
// imports for all routes ---------------------------------------------------------------->>>>
import productRoutes from './routes/productRoutes'
import categoryRoutes from './routes/categoryRoutes'
import subCategoryRoutes from './routes/subCategoryRoutes'

const app = express();

// for formData
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for handling CORs credentials checks before cors
app.use(credentials);
// for Cross origin resource sharing
app.use(cors(corsOptions));

// for making the static files public
app.use(express.static("public"));

// For all the routes
// ->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->

// api for products
app.use("/api/v1", productRoutes);

// api for categories
app.use("/api/v1", categoryRoutes);

// api for sub categories
app.use("/api/v1", subCategoryRoutes);

// ->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->

// middlewares for all the error handling
app.use(notFound);
app.use(errorHandler);

export default app;
