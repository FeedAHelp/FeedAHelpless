import Stripe from 'stripe';
import { Request, Response } from 'express'

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
    apiVersion: '2023-08-16',
  });

export default async function handler(
  req: Request,
  res: Response
) {
    if (req.method === 'POST') {
        try {
        const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [{}],
        line_items: [{
          price_data: {
            currency: 'usd',
            product_data: {
              name: "item.name",
            },
            unit_amount: 100,
          },
          quantity: 1
        }],
        // success_url: `${req.headers.origin}/success`,
        // cancel_url: `${req.headers.origin}/canceled`,
        success_url: `https://abcn.com/success`,
        cancel_url: `https://abcn.com/canceled`,
        // subscription_data: {
        //   metadata: {
        //     // so that we can manually check in Stripe for whether a customer has an active subscription later, or if our webhook integration breaks.
        //     payingUserId: session.user.id,
        //   },
        // },
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
      } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
      }
}
