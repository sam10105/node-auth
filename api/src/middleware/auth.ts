import { Request, Response, NextFunction } from "express";
import { isLoggedIn } from "../auth";

export const guest = (req: Request, _: Response, next: NextFunction) => {
  isLoggedIn(req) ? next(new Error("You are already logged in")) : next();
};
