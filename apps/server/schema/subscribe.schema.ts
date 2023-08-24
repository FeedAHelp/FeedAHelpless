import {z} from 'zod'

export const subscribeSchema =z.object({
    email:z.string().email().min(5)
})
export type subscribeType = z.infer<typeof subscribeSchema>
