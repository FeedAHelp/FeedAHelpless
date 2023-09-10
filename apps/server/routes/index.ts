import { Router } from "express";

import { subscribeRouter } from "./subscribe.router";
import authRouter from "./auth.router";
import { userRouter } from "./user.router";
import { rootRouter } from "./root.router";

export const router: Router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/subscriber", subscribeRouter);
router.use("/", rootRouter);