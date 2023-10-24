import { Request, Response } from 'express'
import { prisma } from '../../utils/prismaInstance'
import { createSubscriptionType, createSucscriptionSchema } from '../../schema/subscription.schema'
import { findDuplicate } from '../tools'

export const createSubscriptionController = async (req: Request<{}, {}, createSubscriptionType>, res: Response) => {
  try {
    const { email } = req.body
    const ipAdress = req.socket.remoteAddress

    createSucscriptionSchema.parse(req.body)

    const duplicateEntry = await findDuplicate('subscription', { email }, res)
    if (duplicateEntry) {
      return duplicateEntry
    }

    const subscription = await prisma.subscription.create({
      data: {
        email,
        ipAdress,
        isActive: true
      }
    })

    return res.status(201).json({ message: 'Subscription Added successfully' })
  } catch (error) {
    return res.status(500).json(error)
  }
}
