import mongoose, { MongooseError } from "mongoose";
import env from "../utils/validateEnv";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGO_URI);
    console.log(`MongoDB connected to ${conn.connection.host}`);
  } catch (error) {
    const mongooseError = error as MongooseError;
    console.error(`Error: ${mongooseError.message}`);
    process.exit(1);
  }
};

export default connectDB;
