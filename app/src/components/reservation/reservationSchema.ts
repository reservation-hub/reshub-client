import { z } from 'zod'

export const reservationSchema = z.object({
  menuId: z.string(),
  stylistId: z.string(),
  shopId: z.string(),
  reservationDate: z.string()
})

export type ReservationSchema = z.infer<typeof reservationSchema>
