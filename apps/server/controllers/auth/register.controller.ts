import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {prisma} from '../../utills/prismaInstance'

export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, image, role, accessToken } = req.body
    // Check if required data is present
    if (!email || !password) {
      return res.status(400).json({ message: 'Required data not found' })
    }

    // Check if email already exists
    const existingUser = await prisma.register.findUnique({ where: { email } })
    if (existingUser) {
      const user = await prisma.UserLoggedIn.create({
        data: {
          name: name,
          userId: existingUser.id
        }
      })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create the register record
    const register = await prisma.register.create({
      data: {
        email,
        phone: '', // Add the phone property here
        password: hashedPassword,
        role: role,
        accessToken: accessToken // Add the access_token property here
      }
    })

    // Create the user record
    const user = await prisma.user.create({
      data: {
        name: name || 'Not found',
        image: image || 'Not found',
        registerId: register.id
      }
    })
    // Generate JWT token
    const token = jwt.sign(
      { email: register.email, userId: user.id },
      process.env.JWT_SECRETE,
      { expiresIn: '1h' } // Token expiry time
    )

    // Save the token in the access_token field of the Register model
    await prisma.register.update({
      where: { id: register.id },
      data: { accessToken: token }
    })

    return res.status(201).json({ message: 'Registration successful', ...register, ...user, accessToken: token })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Registration failed' })
  }
}

export default registerController
