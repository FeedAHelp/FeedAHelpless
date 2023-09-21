import { z } from 'zod';

export const wishSchema = z.object({
  menuId: z.string(),
  wisher: z.string()
});

export type wishType = z.infer<typeof wishSchema>;
