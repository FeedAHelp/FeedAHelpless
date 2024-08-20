import { Request, Response } from 'express';
import { prisma } from '../../utils/prismaInstance';
import jwt from 'jsonwebtoken';
import { CustomJwtPayload } from 'types/type';

export const logoutController = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRETE) as CustomJwtPayload;

    if (!decoded) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    const session = await prisma.session.findFirst({
      where: { accessToken: token, userId: decoded.userId },
    });

    if (!session) {
      return res.status(403).json({ message: 'Session not found' });
    }

    await prisma.session.delete({
      where: { id: session.id },
    });

    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Logout failed' });
  }
};

export default logoutController;
