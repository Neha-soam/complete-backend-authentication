import express from "express";
import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
const authRouter = express.Router();
authRouter.post("/register", authController.register);
authRouter.get("/getme", authController.getme);
authRouter.get("/refresh-token", authController.refreshToken);
authRouter.get("/logout", authController.logout);
authRouter.get("/logout-all", authController.logoutAll);
authRouter.get("/verify-email", authController.verifyEmail);

export default authRouter;
