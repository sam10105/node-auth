import express from "express";
import session, { Store } from "express-session";

import { SESSION_OPTIONS } from "./config";
import { register, login } from "./routes";
import { notFound, serverError } from "./middleware";

export const createApp = (store: Store) => {
  const app = express();

  // Middleware
  app.use(session({ ...SESSION_OPTIONS, store }));
  app.use(express.json());

  // Routes
  app.use(register);
  app.use(login);

  // 404 error
  app.use(notFound);

  // 500 error
  app.use(serverError);

  return app;
};
