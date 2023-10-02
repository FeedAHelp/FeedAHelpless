import { prisma } from '../../utils/prismaInstance';
import { Request, Response } from 'express';
import client from '../lib/prisma'
import paypal from '@paypal/checkout-server-sdk';
import { paypalCreateSchema, paypalCreateType } from '../../schema/paypal.schema';

export default async function create(
  req: Request<{}, {},paypalCreateType>,
  res: Response,
) {
  const PaypalClient = client()
  const { value, currency, email = 'No Email' } = req.body;
  paypalCreateSchema.parse(req.body)

  const request = new paypal.orders.OrdersCreateRequest()
  request.headers['Prefer'] = 'return=representation'
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: currency,
          value: value,
        },
      },
    ],
  })
  const response = await PaypalClient.execute(request)
  if (response.statusCode !== 201) {
    res.status(500)
  }

  await prisma.payment.create({
    data: {
      orderID: response.result.id,
      status: 'PENDING',
      email: email,
      channel: "paypal"
    },
  })
  res.json({ orderID: response.result.id })
}
