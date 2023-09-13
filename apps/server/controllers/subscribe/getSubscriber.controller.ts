import { Request, Response } from 'express'
import { prisma } from '../../utils/prismaInstance'

export const getSubscriberController = async (req: Request, res: Response) => {
  try {
    const subscriber = await prisma.feedahelpNewsletter.findMany({
      orderBy: {
        createAt: 'desc'
      }
    })
    return res.status(200).json(subscriber)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Failed to fetch user data' })
  }
}
