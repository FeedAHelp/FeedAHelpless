import { Router } from 'express'

import { authRouter } from './auth.router'
import { userRouter } from './user.router'
import { rootRouter } from './root.router'
import { contributionRouter } from './contribution.router'
import { likeWishShareRouter } from './likeWishShare.router'
import { payRouter } from './paypal.router'
import ingredientRouter from './ingredient.router'
import { stripeRouter } from "./stripe.router"
import subscriptionRouter from './subscription.router'

export const router: Router = Router()

router.use('/v1/auth', authRouter)
router.use('/v1/user', userRouter)
router.use('/v1/contribution', contributionRouter)
router.use('/v1/lws', likeWishShareRouter)
router.use('/v1/pay', payRouter)
router.use("/v1/stripe", stripeRouter);
router.use('/v1/ingredient/', ingredientRouter)
router.use('/v1/subscription', subscriptionRouter)

router.use('/', rootRouter)
