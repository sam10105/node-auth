import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import mongoose from "mongoose";

import {
  REDIS_OPTIONS,
  SESSION_OPTIONS,
  PORT,
  MONGO_URI,
  MONGO_OPTIONS,
} from "./config";

(async () => {
  try {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

    const RedisStore = connectRedis(session);

    const client = new Redis(REDIS_OPTIONS);

    const app = express();

    app.use(session({ ...SESSION_OPTIONS, store: new RedisStore({ client }) }));

    app.get("/", (_, res) => res.json({ message: "OK" }));

    app.listen(PORT, () =>
      console.log(`Server started on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error(err.message);
  }
})();
