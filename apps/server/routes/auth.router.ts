import express, { Router } from "express";
import { registerController } from '../controllers/auth/register.controller';
import { loginController } from '../controllers/auth/login.controller';
import verifyController from "../controllers/auth/verify.controller";
import logoutController from "../controllers/auth/logout.controller";
import refreshTokenController from "../controllers/auth/refreshToken.controller";

export const authRouter: Router = express.Router();

authRouter.post('/register', registerController)
authRouter.post('/login', loginController);
authRouter.post('/verify', verifyController);
authRouter.post('/logout', logoutController);
authRouter.post('/refresh', refreshTokenController)


export default authRouter
