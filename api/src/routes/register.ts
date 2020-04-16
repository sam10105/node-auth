import { Router } from "express";
import { registrationSchema } from "../validation";
import { User } from "../models";
import { logIn } from "../auth";
import { guest } from "../middleware";

const router = Router();

router.post("/", guest, async (req, res) => {
  await registrationSchema.validateAsync(req.body, { abortEarly: false });

  const { name, email, password } = req.body;

  const emailExists = await User.exists({ email });

  if (emailExists) {
    throw new Error("Invalid email");
  }

  const user = await User.create({ name, email, password });

  logIn(req, user.id);

  res.json({ register: "OK" });
});

export default router;
