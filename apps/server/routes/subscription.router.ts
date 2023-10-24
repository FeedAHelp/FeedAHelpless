import { Router } from 'express'
import {createSubscriptionController} from './../controllers/subscription'

export const subscriptionRouter: Router = Router()

subscriptionRouter.post('/create', createSubscriptionController)

export default subscriptionRouter
