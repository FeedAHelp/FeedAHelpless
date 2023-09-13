import { Request, Response } from 'express'
import {prisma} from '../../utills/prismaInstance'

export const getAllUsersController = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({})

    return res.status(200).json({ users })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Failed to fetch user data' })
  }
}

export default getAllUsersController
