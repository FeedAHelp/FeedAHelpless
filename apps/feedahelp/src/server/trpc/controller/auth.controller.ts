import { z } from 'zod'
import { publicProcedure } from '../trpc'
import { compare } from 'swr/_internal'
import type { ForgertpassControllerType } from '../types/types'
import transporter from '../utils/transporter'
import { requestLimiter } from '../utils/rateLimit'
import bcrypt from 'bcrypt'
import { hashPassword } from '../utils/bcrypt'

const login = publicProcedure
  .input(
    z.object({
      email: z.string().trim(),
      password: z.string().trim(),
    }),
  )
  .mutation(async ({ ctx, input: { email, password } }) => {
    try {
      const user = await ctx.prisma.user.findUnique({
        where: { email },
      })
      if (!user) {
        return {
          statusCode: 500,
          status: 'failed',
          message: 'User not found!',
        }
      }
      if (user.password) {
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch && ctx.remoteAddress) {
          const rateLimit = await requestLimiter.consume(ctx.remoteAddress)
          if (!rateLimit.remainingPoints) {
            return {
              statusCode: 500,
              status: 'failed',
              message: 'Too many requests, try again after 1 minute!',
            }
          }
          return {
            statusCode: 500,
            status: 'failed',
            message: `Password incorrect!, remaining login attempt ${rateLimit.remainingPoints}`,
          }
        }
        return {
          statusCode: 200,
          status: 'success',
          message: 'Login success!',
          data: { user },
        }
      }
    } catch (error) {
      return {
        statusCode: 400,
        status: 'failed',
        message: 'Login failed, try again after 1 minute!',
      }
    }
  })

const sendOtp = publicProcedure
  .input(
    z.object({
      email: z.string().trim(),
    }),
  )
  .mutation(async ({ ctx, input: { email } }) => {
    try {
      const user = await ctx.prisma.user.findUnique({
        where: { email },
      })
      if (!user) {
        return {
          statusCode: 500,
          status: 'failed',
          message: 'user not found!',
          email: email,
        }
      }

      let otp = Math.random()
      otp = Math.floor(Math.random() * 90000) + 10000
      const otpStr: string = otp.toString()
      await ctx.prisma.user.update({
        where: { email },
        data: {
          otp: otpStr,
        } as ForgertpassControllerType,
      })

      const mailOption = {
        to: email,
        subject: 'Otp for password reset',
        html: '<h3>OTP for account verification is </h3>' + "<h1 style='font-weight:bold;'>" + otp + '</h1>',
      }
      transporter.sendMail(mailOption, (error) => {
        if (error) {
          console.log(error)
        }
      })
      return {
        Otp: otp,
        email: email,
        status: 'success',
        message: `Otp has been sent to ${email}, Please check your email`,
      }
    } catch (error) {
      console.log(error)
    }
  })

const verifyOtp = publicProcedure
  .input(
    z.object({
      otp: z.string().trim(),
      email: z.string().trim(),
    }),
  )
  .mutation(async ({ ctx, input: { otp, email } }) => {
    try {
      const user = await ctx.prisma.user.findUnique({
        where: { email },
      })
      if (!user) {
        return {
          statusCode: 500,
          status: 'failed',
          message: 'user not found!',
          data: { user },
        }
      }
      const otpMatch = await compare(otp, user.otp)
      if (!otpMatch) {
        return {
          statusCode: 500,
          status: 'invalid',
          message: 'otp incorrect!',
        }
      }

      return {
        statusCode: 200,
        status: 'success',
        message: 'otp matched!',
        data: { user },
      }
    } catch (error) {
      return {
        statusCode: 400,
        error: error,
        status: 'failed',
        message: 'otp matching failed!',
      }
    }
  })

const resetOtp = publicProcedure
  .input(
    z.object({
      email: z.string().trim(),
    }),
  )
  .mutation(async ({ ctx, input: { email } }) => {
    try {
      const reset = await ctx.prisma.user.update({
        where: {
          email: email,
        },
        data: {
          otp: null,
        },
      })
      if (!reset) {
        return {
          statusCode: 500,
          status: 'failed',
          message: 'can not reset otp!',
          email: email,
        }
      }

      return {
        statusCode: 200,
        email: email,
        status: 'success',
        message: `Otp has been reset to null!`,
      }
    } catch (error) {
      return {
        statusCode: 400,
        error: error,
        status: 'failed',
        message: 'otp reset failed!',
      }
    }
  })

const setNewPassword = publicProcedure
  .input(
    z.object({
      email: z.string().trim(),
      password: z.string().trim(),
    }),
  )
  .mutation(async ({ ctx, input: { email, password } }) => {
    try {
      const hashedPassword = await hashPassword(password)
      const updateUser = await ctx.prisma.user.update({
        where: {
          email: email,
        },
        data: {
          password: hashedPassword,
        },
      })
      if (!updateUser) {
        return {
          statusCode: 500,
          status: 'failed',
          message: 'Failed to update password!',
          email: email,
          password: password,
        }
      }

      return {
        statusCode: 200,
        email: email,
        password: password,
        status: 'success',
        message: 'Password has been updated!',
      }
    } catch (error) {
      return {
        statusCode: 400,
        error: error,
        status: 'failed',
        message: 'Failed to set new password!',
      }
    }
  })

const authController = {
  login,
  sendOtp,
  resetOtp,
  verifyOtp,
  setNewPassword,
}
export default authController
