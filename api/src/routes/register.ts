import { Router } from "express";
import { validate, registrationSchema } from "../validation";
import { User } from "../models";
import { logIn } from "../auth";
import { guest, catchAsync } from "../middleware";
import { BadRequest } from "../errors";

const router = Router();

router.post(
  "/",
  guest,
  catchAsync(async (req, res) => {
    await validate(registrationSchema, req.body);

    const { name, email, password } = req.body;

    const emailExists = await User.exists({ email });

    if (emailExists) {
      throw new BadRequest("Invalid email");
    }

    const user = await User.create({ name, email, password });

    logIn(req, user.id);

    res.json({ register: "OK" });
  })
);

export default router;
