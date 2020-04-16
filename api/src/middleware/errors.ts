import { RequestHandler, Request, Response, NextFunction } from "express";

export const catchAsync = (handler: RequestHandler) => (
  ...args: [Request, Response, NextFunction]
) => handler(...args).catch(args[2]);

export const notFound = (_: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
};

export const serverError = (
  err: any,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  const { status = 500, message = "Internal Server Error", stack } = err;

  if (!status) console.error(stack);

  res.status(status).json({ message });
};
