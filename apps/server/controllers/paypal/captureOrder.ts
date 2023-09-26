import { Request, Response } from 'express';
import client from '../lib/prisma'
import paypal from '@paypal/checkout-server-sdk'
import { prisma } from '../../utils/prismaInstance';

export default async function capture(
  req: Request,
  res: Response,
) {


  const { orderID } = req.body
  const PaypalClient = client()
  const request = new paypal.orders.OrdersCaptureRequest(orderID)
  // request.requestBody({})
  try {
    const response = await PaypalClient.execute(request);
    if (!response) {
      return res.status(500).json({ message: 'Failed to capture order' });
    }
    await prisma.payment.updateMany({
      where: {
        orderID,
      },
      data: {
        status: 'PAID',
      },
    });

    res.json({ ...response.result });
  } catch (error) {
    console.error('Error capturing order:', error);
    res.status(500).json({ message: 'An error occurred while capturing the order' });
  }
}
