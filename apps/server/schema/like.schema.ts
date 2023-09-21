import { z } from 'zod';

export const likeSchema = z.object({
  menuId: z.string(),
  liker: z.string()
});

export type likeType = z.infer<typeof likeSchema>;
