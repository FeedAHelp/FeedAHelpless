import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../utils/prismaInstance';

const createUser = async (userData: any) => {
  const { name = 'Not found', image = 'Not found', registerId } = userData;
  return await prisma.user.create({
    data: { name, image, registerId },
  });
};

const createAccessToken = async (register: any) => {
  const token = jwt.sign(
    { email: register.email, userId: register.id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  await prisma.register.update({
    where: { id: register.id },
    data: { accessToken: token },
  });

  return token;
};

export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, image, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!email || !password) {
      return res.status(400).json({ message: 'Required data not found' });
    }

    const existingUser = await prisma.register.findUnique({ where: { email } });

    if (existingUser) {
      await prisma.loginHistory.create({
        data: { userId: existingUser.id },
      });
    } else {
      const register = await prisma.register.create({
        data: { email, phone: hashedPassword, password: hashedPassword, role, accessToken: '' },
      });

      const user = await createUser({ name, image, registerId: register.id });
      const accessToken = await createAccessToken(register);

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
