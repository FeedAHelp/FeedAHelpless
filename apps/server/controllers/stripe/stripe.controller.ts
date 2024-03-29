import Stripe from 'stripe'
import { Request, Response } from 'express'
import { paypalCreateSchema, paypalCreateType } from '../../schema/paypal.schema'
import { prisma } from '../../utils/prismaInstance'
import stripe from './stripeInstance'

export default async function handler(req: Request<{}, {}, paypalCreateType>, res: Response) {
  const { value, currency, email = 'No Email' } = req.body
  paypalCreateSchema.parse(req.body)

  if (req.method === 'POST') {
    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [{}],
        line_items: [
          {
            price_data: {
              currency: currency,
              product_data: {
                name: 'One Time Donation. Thanks for Your Big Hand.'
              },
              unit_amount: +value * 100
            },
            quantity: 1
          }
        ],
        success_url: process.env.FRONT_END_URL,
        cancel_url: `${process.env.FRONT_END_URL}/canceled`
      }

      const session = await stripe.checkout.sessions.create(params)

      if (session) {
        await prisma.payment.create({
          data: {
            orderID: session.id,
            status: 'PENDING',
            email: email,
            channel: 'stripe'
          }
        })
        res.status(200).json(session)
      } else {
        res.status(500)
      }
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
