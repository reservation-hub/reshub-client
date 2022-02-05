export const RESERVATION_STATUS_TYPE = {
  RESERVED: 'RESERVED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
} as const

const useConvertStatus = (status: string | undefined) => {
  switch (status) {
    case RESERVATION_STATUS_TYPE.RESERVED:
      return (status = '予約中')
    case RESERVATION_STATUS_TYPE.COMPLETED:
      return (status = '終了')
    case RESERVATION_STATUS_TYPE.CANCELLED:
      return (status = 'キャンセル')
    default:
      return status
  }
}

export default useConvertStatus
