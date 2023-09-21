import { z } from 'zod';

export const shareSchema = z.object({
  menuId: z.string(),
  sharer: z.string()
});

export type shareType = z.infer<typeof shareSchema>;
