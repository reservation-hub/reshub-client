import { VALID_REGEX, VALID_TEXT } from '@constants/validation'
import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string().nonempty({ message: VALID_TEXT.IS_EMPTY }),
  password: z
    .string()
    .regex(VALID_REGEX.PASSWORD, VALID_TEXT.PASSWORD)
    .nonempty({ message: VALID_TEXT.IS_EMPTY })
})

export type LoginSchema = z.infer<typeof loginSchema>

export const signupSchema = z
  .object({
    email: z
      .string()
      .email({ message: VALID_TEXT.EMAIL })
      .nonempty({ message: VALID_TEXT.IS_EMPTY }),
    password: z
      .string()
      .regex(VALID_REGEX.PASSWORD, VALID_TEXT.PASSWORD)
      .nonempty({ message: VALID_TEXT.IS_EMPTY }),
    confirm: z
      .string()
      .regex(VALID_REGEX.PASSWORD, VALID_TEXT.PASSWORD)
      .nonempty({ message: VALID_TEXT.IS_EMPTY }),
    username: z.string()
  })
  .refine((value) => value.password === value.confirm, {
    message: VALID_TEXT.DUPLICATED,
    path: ['confirm']
  })

export type SignupSchema = z.infer<typeof signupSchema>
