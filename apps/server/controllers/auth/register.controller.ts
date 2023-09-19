import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { prisma } from '../../utils/prismaInstance'
import sendVerificationEmail from './SendEmail'
import { createUser, createAccessToken, generateRandomCode } from './register.support'

export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, image, role } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    if (!email || !password || !name || !image || !role) {
      return res.status(400).json({ message: 'Required data not found' })
    }

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
          vrified: false
        }
      })

      const user = await createUser({ name, image, registerId: register.id })
      const accessToken = await createAccessToken(register)

      const verifyCode = generateRandomCode()

      const expirationTime = new Date()
      expirationTime.setMinutes(expirationTime.getMinutes() + 5)

      const sendEmail = sendVerificationEmail(email, verifyCode, 'Account Verify Code')

      await prisma.emailVerify.create({
        data: { email, createAt: new Date(), expireAt: expirationTime, code: +verifyCode }
      })

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
