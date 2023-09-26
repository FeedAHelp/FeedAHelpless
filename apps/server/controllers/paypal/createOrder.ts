import { prisma } from '../../utils/prismaInstance';
import { Request, Response } from 'express';
import client from '../lib/prisma'
import paypal from '@paypal/checkout-server-sdk'

export default async function create(
  req: Request,
  res: Response,
) {
  const PaypalClient = client()

  const request = new paypal.orders.OrdersCreateRequest()
  request.headers['Prefer'] = 'return=representation'
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: '100.00',
        },
      },
    ],
  })
  const response = await PaypalClient.execute(request)
  if (response.statusCode !== 201) {
    res.status(500)
  }

  //Once order is created store the data using Prisma
  await prisma.payment.create({
    data: {
      orderID: response.result.id,
      status: 'PENDING',
    },
  })
  res.json({ orderID: response.result.id })
}
