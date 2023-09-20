import { Request, Response } from 'express';
import { prisma } from '../../utils/prismaInstance';

const currentDate = new Date();

const firstDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
const firstDayOfThisMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const firstDayOfNextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

const contributionsBetween = async (firstDate: Date, lastDate: Date) => {
  try {
    const contributions = await prisma.contributions.findMany({
      where: {
        dateTime: {
          gte: firstDate,
          lt: lastDate
        }
      }
    });
    return contributions;
  } catch (error) {
    console.error("Error fetching contributions:", error);
    throw error;
  }
};

export const getContributions = async (req: Request, res: Response) => {
  try {
    const contributorsLastMonth = await contributionsBetween(firstDayOfLastMonth, firstDayOfThisMonth);
    const contributorsThisMonth = await contributionsBetween(firstDayOfThisMonth, firstDayOfNextMonth);

    const lastMonthContribution = contributorsLastMonth.reduce((sum, contributor) => sum + contributor.value, 0);
    const thisMonthContribution = contributorsThisMonth.reduce((sum, contributor) => sum + contributor.value, 0);

    const contributionIncrease =
      lastMonthContribution !== 0 ? ((thisMonthContribution - lastMonthContribution) / lastMonthContribution).toFixed(2) : '0.00';

    return res
      .status(200)
      .json({ lastMonthContribution, thisMonthContribution, contributionIncrease });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Failed to fetch user data' });
  }
};
