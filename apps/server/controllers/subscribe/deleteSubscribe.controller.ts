import { Request, Response } from 'express'
import { prisma } from '../../utils/prismaInstance'

export const deleteSubscribeController = async (req: Request, res: Response) => {
  try {
    const { email } = req.params
    await prisma.newsletter.delete({
      where: {
        email:email
      }
    })
    return res.status(200).json({ status: 'success' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Failed to fetch user data' })
  }
}
