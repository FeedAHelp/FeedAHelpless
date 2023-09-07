import { router } from '../trpc'
import { authRouter } from './auth'
import { forgetPassRouter, loginRouter, userRouter } from './user'

export const appRouter = router({
  user: userRouter,
  login: loginRouter,
  forgetPass: forgetPassRouter,
  auth: authRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
