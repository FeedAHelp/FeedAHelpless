import { Request, Response } from 'express';
import { prisma } from '../../utils/prismaInstance';
import validator from 'validator';


function isValidEmail(email: string) {
  return validator.isEmail(email);
}


export const verifyController = async (req: Request, res: Response) => {
  try {
    const email = req.query?.email as string;
    const passcode = req.query?.passcode as string;
    const passcodeNumber = +passcode;
    const localTime = new Date();

    if (!email || !passcode) {
      return res.status(400).json({ message: 'Required data not found' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    const lastVerificationCode = (await prisma.emailVerify.findMany({ where: { email } })).pop();

    if (!lastVerificationCode) {
      return res.status(400).json({ message: 'Not Exists' });
    }
    if (lastVerificationCode.code !== passcodeNumber) {
      return res.status(400).json({ message: 'Pass Code Not Matched' });
    }
    if (lastVerificationCode.expireAt < localTime) {
      return res.status(400).json({ message: 'Verification Code Expired' });
    }

    const account = await prisma.register.findUnique(
      {where: { email: email }
    })

    if (account.vrified){
      return res.status(200).json({ message: 'Account is already verified' });
    }

    await prisma.register.update({
      where: { email: email },
      data: { vrified: true }
    })

    return res.status(200).json({ message: 'Account Verified' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Verification failed' });
  }
};

export default verifyController;
