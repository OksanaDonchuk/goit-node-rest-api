import Joi from "joi";
import { emailRegexp, subscriptionList } from "../constants/user-constants.js";

export const authSignupSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required(),
});

export const authSigninSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required(),
});

export const updateSabscriptionSchema = Joi.object({
  subscription: Joi.string()
    .required()
    .valid(...subscriptionList),
});
