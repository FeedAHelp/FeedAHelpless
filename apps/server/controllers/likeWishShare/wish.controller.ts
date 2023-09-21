import { Request, Response } from 'express'
import { prisma } from '../../utils/prismaInstance'
import { wishType, wishSchema } from '../../schema/wish.schema'

export const wishController = async (req: Request<{}, {}, wishType>, res: Response) => {
  try {
    const { menuId, wisher } = req.body
    wishSchema.parse(req.body)

    const like = await prisma.wishs.create({
      data: {
        menuId,
        wisher
      }
    })

    return res.status(200).json({ status: 'success' })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}
