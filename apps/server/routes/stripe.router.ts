import express, { Router } from "express";
import handler from '../controllers/stripe/stripe.controller';
// import webhookHandler from '../controllers/stripe/webhooks.controller';


export const stripeRouter: Router = express.Router();

stripeRouter.post('/create', handler)
// stripeRouter.post('/webhook', webhookHandler)

export default stripeRouter
