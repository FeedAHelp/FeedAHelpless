import { prisma } from '../prismaInstance'
import jwt from 'jsonwebtoken'

export const createUser = async (userData: any) => {
  const { name = 'Not found', image = 'Not found', registerId } = userData
  return await prisma.user.create({
    data: { name, image, registerId }
  })
}

export function generateRandomCode() {
  const min = 1000
  const max = 9999
  const randomCode = Math.floor(Math.random() * (max - min + 1)) + min

  const fourDigitCode = randomCode.toString().padStart(4, '0')

  return fourDigitCode
}
