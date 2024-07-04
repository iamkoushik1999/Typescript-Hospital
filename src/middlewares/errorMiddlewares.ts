import { Request, Response, NextFunction } from 'express';

// NOTFOUND
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  const error = new Error(`Not found ${req.originalUrl}`);
  next(error);
};

// Error Handler
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = req.statusCode ? res.statusCode : 500;
  const message = error.message ? error.message : 'Server Error';
  const stack = error.stack ? error.stack : null;

  res.status(statusCode).json({ message: message, stack: stack });
};
