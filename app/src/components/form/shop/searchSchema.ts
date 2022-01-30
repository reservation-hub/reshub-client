import { z } from 'zod'

export const shopSearchSchema = z.object({})

export type ShopSearchSchema = z.infer<typeof shopSearchSchema>
