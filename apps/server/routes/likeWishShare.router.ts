import express, { Router } from "express";
import { likeController } from "~/likeWishShare/like.controller";
import { wishController } from "~/likeWishShare/wish.controller";
import { shareController } from "~/likeWishShare/share.controller";

export const likeWishShareRouter: Router = express.Router();

likeWishShareRouter.post('/like', likeController);
likeWishShareRouter.post('/wish', wishController);
likeWishShareRouter.post('/share', shareController);

export default likeWishShareRouter
