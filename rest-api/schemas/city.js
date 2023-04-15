import Joi from "joi";

export const citySchema = Joi.object({
  name: Joi.string().alphanum().min(2).max(20).required(),
  description: Joi.string().min(0).max(100),
  image: Joi.string()
});