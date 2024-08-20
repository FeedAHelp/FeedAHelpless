import { prisma } from '../prismaInstance'
import jwt from 'jsonwebtoken'

export const createSession = async (userId: string) => {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRETE, { expiresIn: '1h' });
  const refreshToken = jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });

  return await prisma.session.create({
    data: {
      userId: userId,
      accessToken,
      refreshToken,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });
};


export const createNewSession = async (userId: string, refreshToken: string) => {
    const accessToken = jwt.sign({ userId }, process.env.JWT_SECRETE, { expiresIn: '1h' });
    
    return prisma.session.update({
        where: { refreshToken: refreshToken },
        data: { accessToken: accessToken },
    });
};