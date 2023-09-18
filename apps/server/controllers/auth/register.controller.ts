import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../utils/prismaInstance';
import sendVerificationEmail from './SendEmail';

const createUser = async (userData: any) => {
  const { name = 'Not found', image = 'Not found', registerId } = userData;
  return await prisma.user.create({
    data: { name, image, registerId },
  });
};

const createAccessToken = async (register: any) => {
  const token = jwt.sign(
    { email: register.email },
    "1234",
    { expiresIn: '1h' }
  );

  await prisma.register.update({
    where: { id: register.id },
    data: { accessToken: token },
  });

  return token;
};

function generateRandomCode() {

  const min = 1000;
  const max = 9999;
  const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;


  const fourDigitCode = randomCode.toString().padStart(4, '0');

  return fourDigitCode;
}

export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, image, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);


    if (!email || !password || !name || !image || !role) {
      return res.status(400).json({ message: 'Required data not found' });
    }

    const existingUser = await prisma.register.findUnique({ where: { email } });

    if (existingUser) {
      console.log(existingUser.id)
      await prisma.loginHistory.create({
        data: { userId: existingUser.id },
      });
      return res.status(400).json({ message: 'User Exists!!' });
    } else {
      const register = await prisma.register.create({
        data: { email, phone: hashedPassword, password: hashedPassword, role, accessToken: '', vrified: false },
      });

      const user = await createUser({ name, image, registerId: register.id });
      const accessToken = await createAccessToken(register);

      const verifyCode = generateRandomCode();
      const expirationTime = new Date();
      expirationTime.setMinutes(expirationTime.getMinutes() + 5);

      const sendEmail = sendVerificationEmail("nsm.doex@gmail.com", verifyCode)

      await prisma.emailVerify.create({
        data: { email, createAt: new Date(), expireAt: expirationTime, code:  +verifyCode },
      });

      return res.status(201).json({
        message: 'Registration successful',
        ...register,
        ...user,
        accessToken,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Registration failed' });
  }
};

export default registerController;
