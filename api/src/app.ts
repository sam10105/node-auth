import express from "express";
import session, { Store } from "express-session";

import { SESSION_OPTIONS } from "./config";
import { register } from "./routes";

export const createApp = (store: Store) => {
  const app = express();

  // Middleware
  app.use(session({ ...SESSION_OPTIONS, store }));
  app.use(express.json());

  // Routes
  app.use("/register", register);

  return app;
};
