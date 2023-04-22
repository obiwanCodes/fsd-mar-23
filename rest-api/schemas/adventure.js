import Joi from "joi";

export const adventureSchema = Joi.object({
  name: Joi.string().required().max(50),
  costPerHead: Joi.number()
    .integer()
    .sign("positive")
    .min(10)
    .max(100000)
    .required(),
  currency: Joi.any().allow("INR", "USD", "GBP", "EUR").required(),
  image: Joi.string().required(),
  duration: Joi.number().min(1).max(72).required(),
  category: Joi.any().allow("Party", "Beaches", "Cycling", "ThemePark"),
  cityId: Joi.string().length(36).required(),
});
