import { Router } from 'express'
import { registerController } from '../controllers/auth/register.controller'
import { loginController } from '../controllers/auth/login.controller'

const authRouter = Router()

authRouter.post('/register', registerController)
authRouter.post('/login', loginController)
export default authRouter