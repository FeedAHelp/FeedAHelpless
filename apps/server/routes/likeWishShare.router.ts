import express, { Router } from "express";
import { likeController } from "../controllers/likeWishShare/like.controller";
import { wishController } from "../controllers/likeWishShare/wish.controller";
import { shareController } from "../controllers/likeWishShare/share.controller";

export const likeWishShareRouter: Router = express.Router();

likeWishShareRouter.post('/like', likeController);
likeWishShareRouter.post('/wish', wishController);
likeWishShareRouter.post('/share', shareController);

export default likeWishShareRouter
