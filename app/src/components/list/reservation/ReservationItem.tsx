import React, { useState } from 'react'
import {
  ReservationForList,
  ReservationStatus
} from '@utils/api/request-response-types/client/models/Reservation'
import { Items } from '@components/list/_PropsType'
import useConvertStatus from '@utils/hooks/useConvertStatus'
import useConvertTime from '@utils/hooks/useConvertTime'
import CardTemplate from '@components/Template/CardTemplate'
import Button from '@components/common/Button'
import ModalOverlay from '@components/modal/ModalOverlay'
import ModalAlert from '@components/modal/ModalAlert'
import { useModal } from '@utils/hooks/useModal'
import ReservationInfo from './ReservationInfo'

export interface ReservationItemProps<T> extends Items<T> {
  cancelReservation?: (reservationId: number) => void
}

const ReservationItem = <T extends ReservationForList[]>({
  item,
  cancelReservation
}: ReservationItemProps<T>) => {
  const textSize = 'lg:text-[1.6rem] text-[1rem]'
  const { open, modalHandler } = useModal(false)
  const [reservationId, setReservationId] = useState<number>()

  return (
    <>
      {item?.map((v, i) => (
        <React.Fragment key={i}>
          <CardTemplate classes='lg:m-5 mt-4 border rounded-lg' shadow>
            <div className='flex justify-between p-5 pt-2'>
              <ReservationInfo
                item={v}
                classes={`${textSize} mr-5 mt-4 text-gray-main`}
              />

              <div className='grid h-full'>
                <span className={`${textSize} text-gray-main`}>
                  予約日:
                  <span className='text-primary-dark'>
                    {useConvertTime('ymdhm', v.reservationDate)}
                  </span>
                </span>
                <span
                  className={`${
                    v.status === ReservationStatus.RESERVED
                      ? 'bg-yellow-400 mt-3'
                      : v.status === ReservationStatus.COMPLETED
                      ? 'bg-green-400 mt-16'
                      : 'bg-error-light mt-16'
                  } rounded-lg p-1 text-center text-secondary-light`}
                >
                  {useConvertStatus(v.status)}
                </span>
                {v.status === ReservationStatus.RESERVED && (
                  <Button
                    classes='mt-3 p-1 border-none bg-error-main text-secondary-light rounded-lg'
                    onClick={() => (modalHandler(), setReservationId(v.id))}
                  >
                    キャンセルする
                  </Button>
                )}
              </div>
            </div>
          </CardTemplate>
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
                  この予約を<span className='text-error-main'>キャンセル</span>
                  しますか?
                  <p className='lg:text-[1.4rem] text-[1.2rem]'>
                    ※<span className='text-error-main'>キャンセル</span>
                    すると取り消しできませんのでご注意ください。
                  </p>
                </ModalAlert>
              </div>
            </ModalOverlay>
          )}
        </React.Fragment>
      ))}
    </>
  )
}

export default ReservationItem
