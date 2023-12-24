import { NextFunction, Request, Response } from "express";

interface CustomError extends Error {
    statusCode?: number;
    kind?: string;
    path?: string;
  }

export const notFound = (req:Request, res:Response, next:NextFunction) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404)
    next(error);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err:CustomError, req:Request, res:Response, next:NextFunction) => {
    // let statusCode = err.statusCode || 500;
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message || "Internal Server Error";

    if(err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = `Resource not found. invalid ${err.path}`
    }

    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}