import express, { Router } from "express";
import capture from '../controllers/paypal/captureOrder';
import create from '../controllers/paypal/createOrder';


export const payRouter: Router = express.Router();

payRouter.post('/create', create)
payRouter.post('/capture', capture);

export default payRouter
