import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { prisma } from '../../utils/prismaInstance'
import { createUser } from '../../utils/auth/register'
import { createSession } from '../../utils/auth/auth'

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
        verified: false
      }
    })

    const user = await createUser({ name, image, registerId: register.id })
    const session = await createSession(register.id);

    console.log("test")
    return res.status(200).json({
      message: 'Login successful',
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
    })
  }
  } catch (error) {
    return res.status(500).json({ message: 'Registration failed' })
  }
}

export default registerController
