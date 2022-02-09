import { VALID_TEXT } from '@/constants/validation'
import { z } from 'zod'

export const searchShopToLocation = z.object({
  areaId: z.string().nonempty({ message: VALID_TEXT.IS_EMPTY }),
  prefectureId: z.string().optional(),
  cityId: z.string().optional()
})

export const searchToShopsNameSchema = z.object({
  keyword: z.string().nonempty({ message: VALID_TEXT.IS_EMPTY })
})

export type SearchShopToLocationSchema = z.infer<typeof searchShopToLocation>

export type SearchToShopsNameSchema = z.infer<typeof searchToShopsNameSchema>
