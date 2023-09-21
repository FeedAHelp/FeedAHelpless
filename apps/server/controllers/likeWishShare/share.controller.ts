import { Request, Response } from 'express'
import { prisma } from '../../utils/prismaInstance'
import { shareType, shareSchema } from '../../schema/share.schema'

export const shareController = async (req: Request<{}, {}, shareType>, res: Response) => {
  try {
    const { menuId, sharer } = req.body
    shareSchema.parse(req.body)

    const like = await prisma.shares.create({
      data: {
        menuId,
        sharer
      }
    })

    return res.status(200).json({ status: 'success' })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}
