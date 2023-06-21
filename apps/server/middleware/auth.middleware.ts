import express from 'express'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import type { CustomJwtPayload } from '../types/type'

const prisma = new PrismaClient()

export const authenticateJWT = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (token) {
    // Fetch user data from Prisma based on the decoded user ID or any other information you stored in the token
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRETE) as CustomJwtPayload

      if (!decoded) {
        return res.status(403).json({ message: 'Invalid token' })
      }

      const user = await prisma.user.findUnique({
        where: {
          id: decoded.userId
        }
      })

      if (!user) {
        return res.status(403).json({ message: 'User not found' })
      }
      next()
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal server error' })
    }
  } else {
    return res.status(401).json({ message: 'No token provided' })
  }
}
