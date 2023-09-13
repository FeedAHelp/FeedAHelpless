import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    // Check if required data is present
    if (!email || !password) {
      return res.status(400).json({ message: 'Required data not found' })
    }

    // Check if email exists
    const existingUser = await prisma.register.findUnique({ where: { email } })
    if (!existingUser) {
      return res.status(401).json({ message: 'User is not found' })
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, existingUser.password)
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Password is not match' })
    }
    // Retrieve user data
    const user = await prisma.user.findUnique({
      where: { registerId: existingUser.id }
    })

    // Generate JWT token
    const token = jwt.sign(
      { email: existingUser.email, userId: user.id },
      process.env.JWT_SECRETE,
      { expiresIn: '1h' } // Token expiry time
    )

    // Save the token in the access_token field of the Register model
    await prisma.register.update({
      where: { id: existingUser.id },
      data: { accessToken: token }
    })

    return res.status(200).json({ message: 'Login successful', ...existingUser, ...user, accessToken: token })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Login failed' })
  } 
}

export default loginController
