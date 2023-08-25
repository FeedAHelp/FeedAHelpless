import { Request, Response } from 'express'
import { prisma } from '../../utills/prismaInstance'

export const deleteSubscribeController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await prisma.feedahelpNewsletter.delete({
      where: {
        id: id
      }
    })
    return res.status(200).json({ status: 'success' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Failed to fetch user data' })
  }
}
