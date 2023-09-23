import { z } from 'zod'
import { publicProcedure } from '../trpc'
import { Prisma } from '@prisma/client'
import { hashPassword } from '../utils/bcrypt'

const create = publicProcedure
  .input(
    z.object({
      name: z.string().trim(),
      email: z.string().trim(),
      password: z.string().trim(),
    }),
  )
  .mutation(async ({ input }) => {
    try {
      const hashedPassword = await hashPassword(input.password)
      const user = await prisma?.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: hashedPassword,
        },
      })
      return {
        statusCode: 200,
        status: 'success',
        message: 'registration success!',
        data: { user },
      }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return {
            statusCode: 400,
            status: 'failed',
            message: 'Email already exists, a new user cannot be created with this email!',
          }
        }
      }
    }
  })

const findAll = publicProcedure.query(async () => {
  try {
    const alluser = await prisma?.user.findMany()
    return {
      statusCode: 200,
      status: 'success',
      message: 'get all user success!',
      data: { alluser },
    }
  } catch (error) {
    return {
      statusCode: 400,
      error: error,
      status: 'failed',
      message: 'failed to get data!',
    }
  }
})

const subscribe = publicProcedure
  .input(
    z.object({
      email: z.string().trim(),
    }),
  )
  .mutation(async ({ input: { email } }) => {
    try {
      const subscribed = await prisma?.subscriber.create({
        data: {
          email: email,
        },
      })

      return {
        statusCode: 200,
        status: 'success',
        message: 'Thank You',
        data: { subscribed },
      }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return {
            statusCode: 400,
            status: 'failed',
            message: 'Email already exists, a new subscriber cannot be created with this email!',
          }
        }
      }
    }
  })


const userController = {
  create,
  findAll,
  subscribe,
};

export default userController;
