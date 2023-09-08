import { router } from '../trpc'
import userController from '../controller/user.controller'
import authController from '../controller/auth.controller'

export const userRouter = router({
  register: userController.create,
  findall: userController.findAll,
  subscribe: userController.subscribe,
})

export const loginRouter = router({
  login: authController.login,
})

export const forgetPassRouter = router({
  sendOtp: authController.sendOtp,
})
