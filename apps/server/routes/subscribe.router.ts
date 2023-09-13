import express, { Router } from "express";
import { subscribeController } from '../controllers/subscribe/subscribe.controller'
import { getSubscriberController } from '../controllers/subscribe/getSubscriber.controller'
import { deleteSubscribeController } from '../controllers/subscribe/deleteSubscribe.controller'

export const subscribeRouter: Router = express.Router();

subscribeRouter.get('/subscribe', getSubscriberController)
subscribeRouter.post('/subscribe', subscribeController)
subscribeRouter.delete('/subscribe/:email', deleteSubscribeController)

export default subscribeRouter
