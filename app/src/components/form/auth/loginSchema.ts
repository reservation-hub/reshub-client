import { VALID_REGEX } from '@/constants/validation'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email().nonempty(),
  passowrd: z.string().regex(VALID_REGEX.PASSWORD).nonempty()
})

export type LoginSchema = z.infer<typeof loginSchema>
