import { z } from 'zod';

export const paypalCreateSchema = z.object({
  value: z.string(),
  currency: z.string(),
  email: z.string().optional(),
});

export type paypalCreateType = z.infer<typeof paypalCreateSchema>;

export const paypalCaptureSchema = z.object({
  orderID: z.string()
});

export type paypalCaptureType = z.infer<typeof paypalCaptureSchema>;
