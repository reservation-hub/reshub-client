export type IdentifierType = string | number

export type AddCallBack = (
  day: string,
  number: IdentifierType,
  time: string,
  id?: IdentifierType
) => void

export type AppointmentAttributes = {
  id?: string | number
  number: string | number
  isReserved?: boolean
  isSelected?: boolean
  periods?: number
  startDate?: Date
} | null

export type ReservationType = {
  id: number
  reservationStart: string
  reservationEnd: string
  stylistId?: number
}

export type RemoveCallback = (day: string, number: IdentifierType) => void

export interface SelectedMenuValue {
  menuName?: string
  menuPrice?: number | null
  menuDuration?: number | null
}

export interface SelectedStylistValue {
  stylistId?: number | null
  stylistName?: string
}

export interface AddedAppointment {
  day: string
  number: IdentifierType
  time: string
  id?: IdentifierType
}

export interface AddCase {
  addedAppointment: AddedAppointment
  addCb: AddCallBack
}

export interface ContinuousAddCase extends AddCase {
  removedAppointment?: AddedAppointment
  removeCb?: RemoveCallback
}
