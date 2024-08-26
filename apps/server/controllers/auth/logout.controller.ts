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
    console.log('Token received:', token);

    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET) as CustomJwtPayload;
    console.log('Decoded token:', decoded);

    if (!decoded) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    const session = await prisma.session.findFirst({
      where: {
        refreshToken: token,
        userId: decoded.userId,
      },
    });

    console.log(session)

    if (!session) {
      console.log('Session not found for token:', token);
      return res.status(403).json({ message: 'Session not found' });
    }

    await prisma.session.delete({
      where: { id: session.id },
    });

    console.log('Session deleted successfully for token:', token);
    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Error during logout:', error);
    return res.status(500).json({ message: 'Logout failed' });
  }
};

export default logoutController;
