import { VALID_REGEX, VALID_TEXT } from '@/constants/validation'
import { Gender } from '@/utils/api/request-response-types/client/models/User'
import { z } from 'zod'

export const userSchema = z.object({
  firstNameKana: z
    .string()
    .regex(VALID_REGEX.KANA_NAME, VALID_TEXT.KANA_NAME)
    .nonempty({ message: '' }),
  lastNameKana: z
    .string()
    .regex(VALID_REGEX.KANA_NAME, VALID_TEXT.KANA_NAME)
    .nonempty({ message: '' }),
  firstNameKanji: z.string(),
  lastNameKanji: z.string(),
  gender: z.nativeEnum(Gender, {
    required_error: VALID_TEXT.IS_EMPTY,
    invalid_type_error: VALID_TEXT.IS_EMPTY
  }),
  username: z.string().nonempty({ message: VALID_TEXT.IS_EMPTY }),
  birthday: z.string()
})

export type UserSchema = z.infer<typeof userSchema>

export const changePassowrdSchema = z
  .object({
    oldPassword: z.string().regex(VALID_REGEX.PASSWORD).nonempty(),
    newPassword: z.string().regex(VALID_REGEX.PASSWORD).nonempty(),
    confirmNewPassword: z.string().regex(VALID_REGEX.PASSWORD).nonempty()
  })
  .refine((value) => value.newPassword === value.confirmNewPassword, {
    message: VALID_TEXT.DUPLICATED,
    path: ['confirmNewPassword']
  })
