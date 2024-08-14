import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { prisma } from '../../utils/prismaInstance'
import sendVerificationEmail from './email.controller'
import { createUser, createAccessToken, generateRandomCode } from '../../utils/auth/register'

export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, image, role } = req.body

    if (!email || !password || !name || !image || !role) {
      return res.status(400).json({ message: 'Required data not found' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = await prisma.register.findUnique({ where: { email } })

    if (existingUser) {
      await prisma.loginHistory.create({
        data: { userId: existingUser.id }
      })
      return res.status(400).json({ message: 'User Exists!!' })
    } else {
      const register = await prisma.register.create({
        data: {
          email,
          phone: hashedPassword,
          password: hashedPassword,
          role,
          accessToken: '',
          verified: false
        }
      })

      const user = await createUser({ name, image, registerId: register.id })
      const accessToken = await createAccessToken(register)

      return res.status(201).json({
        message: 'Registration successful',
        ...register,
        ...user,
        accessToken
      })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Registration failed' })
  }
}

export default registerController
