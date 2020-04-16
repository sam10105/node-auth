import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import mongoose from "mongoose";

import { createApp } from "./app";
import { REDIS_OPTIONS, PORT, MONGO_URI, MONGO_OPTIONS } from "./config";

(async () => {
  try {
    // MongoDB
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

    // Redis
    const RedisStore = connectRedis(session);
    const client = new Redis(REDIS_OPTIONS);
    const store = new RedisStore({ client });

    const app = createApp(store);

    app.listen(PORT, () =>
      console.log(`Server started on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error(err.message);
  }
})();
