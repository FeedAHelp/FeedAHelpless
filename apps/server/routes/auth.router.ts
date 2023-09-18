import express, { Router } from "express";
import { registerController } from '../controllers/auth/register.controller';
import { loginController } from '../controllers/auth/login.controller';
import verifyController from "../controllers/auth/verify.controller";

export const authRouter: Router = express.Router();

authRouter.post('/register', registerController)
authRouter.post('/login', loginController);
authRouter.post('/verify', verifyController);

export default authRouter
