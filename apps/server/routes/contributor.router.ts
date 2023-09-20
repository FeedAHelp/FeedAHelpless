import express, { Router } from "express";
import { getContributionController } from "../controllers/contribution/contribution.controller";

export const contributionRouter: Router = express.Router();

contributionRouter.get('/get', getContributionController)
export default contributionRouter
