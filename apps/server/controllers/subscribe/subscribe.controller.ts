import { Request, Response } from 'express'
import { prisma } from '../../utils/prismaInstance'
import { subscribeSchema,subscribeType } from '../../schema/subscribe.schema'

export const subscribeController = async (req: Request<{}, {},subscribeType>, res: Response) => {
  try {
    const { email } = req.body
    subscribeSchema.parse(req.body)

    await prisma.newsletter.create({
      data: {
        email: email
      }
    })
    return res.status(200).json({ status: 'success' })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}
