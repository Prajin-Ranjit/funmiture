import { NextFunction, Request, Response } from "express";

type AsyncFunction<T> = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<T>;

export const catchAsyncError =
  <T>(passedFunction: AsyncFunction<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(passedFunction(req, res, next)).catch(next);
  };
