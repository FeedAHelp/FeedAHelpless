import { Response } from 'express';
import { prisma } from '../../utils/prismaInstance'
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import mime from 'mime-types';


const models: Record<string, any> = {
    subscription: prisma.subscription,
};

export const findDuplicate = async (modelKey: string, where: object, res: Response) => {
    const model = models[modelKey];

    if (!model) {
        return res.status(500).json({ message: 'Invalid model name' });
    }

    const findDuplicate = await model.findFirst({
        where: where
    });

    if (findDuplicate) {
        return res.status(409).json({ message: `${Object.keys(where)} Exists` });
    }
};

function generateMixedCaseHex(hexString: string) {
  return hexString.split('').map((char, index) => {
    const randomNumber = Math.floor(Math.random() * 2) + 2;
    return index % randomNumber === 0 ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      const randomHex = crypto.randomBytes(32).toString('hex');
      const uniqueFilename = generateMixedCaseHex(randomHex) + path.extname(file.originalname);
      cb(null, uniqueFilename);
    },
  });

  const fileFilter: multer.Options['fileFilter'] = function (req, file, cb) {
    const mimeType = mime.lookup(file.originalname) as string;
    if (mimeType?.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  export const upload = multer({ storage: storage, fileFilter: fileFilter });
