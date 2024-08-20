import express from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../../utils/prismaInstance';
import { CustomJwtPayload } from 'types/type';
import { createNewSession } from '../../utils/auth/auth';

export const refreshTokenController = async (req: express.Request, res: express.Response) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET) as CustomJwtPayload;

    if (!decoded) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    const session = await prisma.session.findFirst({
      where: { refreshToken: token, userId: decoded.userId },
    });

    if (!session) {
      return res.status(403).json({ message: 'Session not found or token is invalid' });
    }

    const newSession = await createNewSession(session.userId, token);



    return res.status(200).json({
      message: 'Access token refreshed successfully',
      accessToken: newSession.accessToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Token refresh failed' });
  }
};

export default refreshTokenController;
