import express from "express";
import authControllers from "../controllers/authControllers.js";
import isEmptyBody from "../middlewares/isEmptyBody.js";
import validateBody from "../decorators/validateBody.js";
import {
  authSignupSchema,
  authSigninSchema,
  updateSabscriptionSchema,
} from "../schemas/authSchemas.js";
import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  validateBody(authSignupSchema),
  authControllers.register
);

authRouter.post(
  "/login",
  isEmptyBody,
  validateBody(authSigninSchema),
  authControllers.login
);

authRouter.post("/logout", authenticate, authControllers.logout);

authRouter.get("/current", authenticate, authControllers.current);

authRouter.patch(
  "/",
  authenticate,
  isEmptyBody,
  validateBody(updateSabscriptionSchema),
  authControllers.updateSubscription
);

usersRouter.patch(
  "/avatars",
  authenticate,
  isEmptyBody,
  upload.single("avatar"),
  authControllers.updateAvatar
);

export default authRouter;
