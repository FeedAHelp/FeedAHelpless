import { z } from 'zod'

export const createSucscriptionSchema = z.object({
    email: z.string().email(),
})
export type createSubscriptionType = z.infer<typeof createSucscriptionSchema>
