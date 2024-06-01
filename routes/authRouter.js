import express from "express";
import authControllers from "../controllers/authControllers.js";
import isEmptyBody from "../middlewares/isEmptyBody.js";
import validateBody from "../decorators/validateBody.js";
import {
  authSignupSchema,
  authSigninSchema,
  updateSabscriptionSchema,
  emailVerifySchema,
} from "../schemas/authSchemas.js";
import authenticate from "../middlewares/authenticate.js";
import isValidId from "../middlewares/isValidId.js";
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

authRouter.get("/verify/:verificationToken", authControllers.verifyEmail);

authRouter.post(
  "/verify",
  isEmptyBody,
  validateBody(emailVerifySchema),
  authControllers.resendingVerify
);

authRouter.get("/current", authenticate, authControllers.current);

authRouter.patch(
  "/:id/subscription",
  isEmptyBody,
  isValidId,
  validateBody(updateSabscriptionSchema),
  authControllers.updateSubscription
);

authRouter.patch(
  "/avatars",
  upload.single("avatar"),
  authenticate,
  authControllers.updateAvatar
);

export default authRouter;
