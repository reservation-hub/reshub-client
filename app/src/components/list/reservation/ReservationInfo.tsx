import React from 'react'
import { ReservationStatus } from '@/utils/api/request-response-types/client/models/Reservation'
import useConvertStatus from '@/utils/hooks/useConvertStatus'
import { useModal } from '@/utils/hooks/useModal'
import Button from '@/components/common/Button'
import ModalOverlay from '@/components/modal/ModalOverlay'
import ModalAlert from '@/components/modal/ModalAlert'
import { LongCardListProps } from '../LongCardList'

const ReservationInfo = ({
  reservationId,
  menuName,
  stylistName,
  classes,
  reservationStatus,
  cancelReservation
}: LongCardListProps) => {
  const { open, modalHandler } = useModal(false)
  const reservationStatusClass = (
    status?: keyof typeof ReservationStatus
  ): string => {
    switch (status) {
      case ReservationStatus.CANCELLED:
        return 'bg-error-light w-[16.5rem] mt-16'
      case ReservationStatus.COMPLETED:
        return 'bg-green-400 w-[16.5rem] mt-16'
      default:
        return 'bg-yellow-400'
    }
  }

  return (
    <>
      <div className='flex justify-between'>
        <div className='flex items-center mt-4 lg:m-0'>
          <div className={classes}>
            <p>予約番号</p>
            <hr />
            <p className='text-primary-dark'>{reservationId}</p>
          </div>
          <div className={classes}>
            <p>予約したメニュー</p>
            <hr />
            <p className='text-primary-dark'>{menuName}</p>
          </div>
          <div className={classes}>
            <p>担当スタイリスト</p>
            <hr />
            <p className='text-primary-dark'>{stylistName}</p>
          </div>
        </div>

        <div className='grid'>
          <span
            className={`${reservationStatusClass(
              reservationStatus
            )} rounded-lg p-1 text-center text-secondary-light`}
          >
            {useConvertStatus(reservationStatus)}
          </span>

          {reservationStatus === ReservationStatus.RESERVED && (
            <Button
              classes='mt-3 p-1 border-none bg-error-main text-secondary-light rounded-lg'
              onClick={() => modalHandler()}
            >
              この予約をキャンセル
            </Button>
          )}
        </div>
      </div>

      {open && (
        <ModalOverlay open={open} onClose={modalHandler}>
          <div
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <ModalAlert
              onClose={modalHandler}
              submitHandler={() =>
                cancelReservation &&
                (cancelReservation(Number(reservationId)), modalHandler())
              }
              buttonText='削除'
            >
              この予約を
                <span className='text-error-main'>キャンセル</span>
              しますか?
              <p className='lg:text-[1.4rem] text-[1.2rem]'>
                ※<span className='text-error-main'>キャンセル</span>
                すると取り消しできませんのでご注意ください。
              </p>
            </ModalAlert>
          </div>
        </ModalOverlay>
      )}
    </>
  )
}

export default ReservationInfo
