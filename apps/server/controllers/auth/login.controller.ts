import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { prisma } from '../../utils/prismaInstance'
import { createSession } from '../../utils/auth/auth'

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      console.log("OON")
      return res.status(400).json({ message: 'Required data not found' })
    }

    const existingUser = await prisma.register.findUnique({ where: { email } })
    if (!existingUser) {
      console.log("OK")
      return res.status(401).json({ message: 'User is not found' })
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password)
    if (!passwordMatch) {
      console.log("IN")
      return res.status(401).json({ message: 'Password is not match' })
    }

    const user = await prisma.user.findUnique({
      where: { registerId: existingUser.id }
    })

    const session = await createSession(existingUser.id)


    return res.status(200).json({
      message: 'Login successful',
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Login failed' })
  }
}

export default loginController
