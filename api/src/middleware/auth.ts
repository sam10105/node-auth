import { Request, Response, NextFunction } from "express";
import { isLoggedIn } from "../auth";
import { BadRequest } from "../errors";

export const guest = (req: Request, _: Response, next: NextFunction) => {
  isLoggedIn(req) ? next(new BadRequest("You are already logged in")) : next();
};
