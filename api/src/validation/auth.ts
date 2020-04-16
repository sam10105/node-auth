import Joi from "@hapi/joi";

export const registrationSchema = Joi.object({
  name: Joi.string().min(3).max(254).lowercase().trim().required(),
  email: Joi.string().email().min(8).max(254).lowercase().trim().required(),
  password: Joi.string().min(8).max(128).required(), // TODO: max
  passwordConfirmation: Joi.valid(Joi.ref("password")).required(),
});
