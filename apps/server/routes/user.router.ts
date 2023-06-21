import { Router } from 'express'
import { getAllUsersController } from '../controllers/user/getAllusers.controller'

const userRouter = Router()

userRouter.get('/getAllUsers', getAllUsersController)
export default userRouter
