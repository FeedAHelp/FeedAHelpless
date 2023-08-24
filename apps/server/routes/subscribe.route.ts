import { Router } from 'express'
import { subscribeController } from '../controllers/subscribe/subscribe.controller'
import { getSubscriberController } from '../controllers/subscribe/getSubscriber.controller'
import { deleteSubscribeController } from '../controllers/subscribe/deleteSubscribe.controller'
const subscribeRouter = Router()

subscribeRouter.get('/subscribe', getSubscriberController)
subscribeRouter.post('/subscribe', subscribeController)
subscribeRouter.delete('/subscribe/:id', deleteSubscribeController)

export default subscribeRouter
