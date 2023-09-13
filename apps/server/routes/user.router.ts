import express, { Router } from "express";
import { getAllUsersController } from '../controllers/user/getAllusers.controller'

export const userRouter: Router = express.Router();

userRouter.get('/getAllUsers', getAllUsersController)
export default userRouter
