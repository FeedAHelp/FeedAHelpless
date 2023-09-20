import express, { Router } from "express";
import { getContributions } from "../controllers/contribution/contribution.controller";

export const contributionRouter: Router = express.Router();

contributionRouter.get('/get', getContributions)
export default contributionRouter
