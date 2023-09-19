import { prisma } from '../prismaInstance'
import jwt from 'jsonwebtoken'

export const createUser = async (userData: any) => {
  const { name = 'Not found', image = 'Not found', registerId } = userData
  return await prisma.user.create({
    data: { name, image, registerId }
  })
}

export const createAccessToken = async (register: any) => {
  const token = jwt.sign(
    {
      email: register.email
    },
    process.env.JWT_SECRETE,
    { expiresIn: '1h' }
  )

  await prisma.register.update({
    where: { id: register.id },
    data: { accessToken: token }
  })

  return token
}

export function generateRandomCode() {
  const min = 1000
  const max = 9999
  const randomCode = Math.floor(Math.random() * (max - min + 1)) + min

  const fourDigitCode = randomCode.toString().padStart(4, '0')

  return fourDigitCode
}
