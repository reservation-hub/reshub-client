import { z } from 'zod'

export const searchShopFromArea = z.object({
  areaId: z.number({ required_error: '' }),
  prefectureId: z.number().optional(),
  cityId: z.number().optional()
})

export const searchToShopsNameSchema = z.object({
  keyword: z.string().nonempty()
})

export type SearchShopFromArea = z.infer<typeof searchShopFromArea>

export type SearchToShopsNameSchema = z.infer<typeof searchToShopsNameSchema>
