import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function startServer() {
  try {
    await prisma.$connect()
    console.log('Connected to the database')

    // Start your server or perform other operations here
  } catch (error) {
    console.error('Error connecting to the database:', error)
  }
}
