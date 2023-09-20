import { Router } from "express";

import subscribeRouter from "./subscribe.router";
import {authRouter} from "./auth.router";
import { userRouter } from "./user.router";
import { rootRouter } from "./root.router";
import {contributionRouter} from "./contributor.router";

export const router: Router = Router();


router.use("/v1/auth", authRouter);
router.use("/v1/user", userRouter);
router.use("/v1/subscriber", subscribeRouter);
router.use("/v1/contributor", contributionRouter);
router.use("/", rootRouter);
