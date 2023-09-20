import { Request, Response } from 'express'
import { prisma } from '../../utils/prismaInstance'

const currentDate = new Date()


const firstDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
const firstDayOfThisMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
const firstDayOfNextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)

export const getContributionController = async (req: Request, res: Response) => {
  try {
    const contributorsLastMonth = await prisma.contributionId.findMany({
      where: {
        dateTime: {
          gte: firstDayOfLastMonth,
          lt: firstDayOfThisMonth
        }
      }
    })

    const contributorsThisMonth = await prisma.contributionId.findMany({
      where: {
        dateTime: {
          gte: firstDayOfThisMonth,
          lt: firstDayOfNextMonth
        }
      }
    })

    const lastMonthContribution = contributorsLastMonth.reduce((sum, contributor) => sum + contributor.value, 0)
    const thisMonthContribution = contributorsThisMonth.reduce((sum, contributor) => sum + contributor.value, 0)

    const contributionIncrease =
      lastMonthContribution !== 0 ? ((thisMonthContribution - lastMonthContribution) / lastMonthContribution).toFixed(2) : '0.00';


    return res
      .status(200)
      .json({ lastMonthContribution: lastMonthContribution, thisMonthContribution: thisMonthContribution, contributionIncrease: contributionIncrease })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Failed to fetch user data' })
  }
}
