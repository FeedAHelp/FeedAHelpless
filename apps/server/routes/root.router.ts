import express, { Router } from "express";
import { rootController } from '../controllers/root.controller'

export const rootRouter: Router = express.Router();

rootRouter.get('/', rootController)
export default rootRouter
