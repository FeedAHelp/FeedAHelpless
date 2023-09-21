import { Request, Response } from 'express'
import { prisma } from '../../utils/prismaInstance'
import { likeType, likeSchema } from '../../schema/like.schema'

export const likeController = async (req: Request<{}, {}, likeType>, res: Response) => {
  try {
    const { menuId, liker } = req.body
    likeSchema.parse(req.body)

    const like = await prisma.likes.create({
      data: {

        menuId: menuId,
        liker: liker
      }
    })

    return res.status(200).json({ status: 'success' })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}
