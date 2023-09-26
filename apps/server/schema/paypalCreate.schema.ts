import { z } from 'zod';

export const paypalCreateSchema = z.object({
  value: z.string(),
  currency: z.string(),
  email: z.string().optional(),
});

export type paypalCreateType = z.infer<typeof paypalCreateSchema>;
