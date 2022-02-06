import React from 'react'
import SubTitle from '@/components/common/SubTitle'
import {
  ReservationForList,
  ReservationStatus
} from '@/utils/api/request-response-types/client/models/Reservation'
import { Items } from '@components/list/_PropsType'
import useConvertStatus from '@/utils/hooks/useConvertStatus'
import useConvertTime from '@utils/hooks/useConvertTime'
import CardTemplate from '@/components/Template/CardTemplate'
import Button from '@/components/common/Button'
import ModalOverlay from '@/components/modal/ModalOverlay'
import ModalAlert from '@/components/modal/ModalAlert'

export interface ReservationItemProps<T> extends Items<T> {
  cancelReservation?: (id: number) => void
  useModal?: { open?: boolean; modalHandler: () => void }
}

const ReservationItem = <T extends ReservationForList[]>({
  item,
  cancelReservation,
  useModal
}: ReservationItemProps<T>) => {
  const statusColor =
    item?.find((reservation) => reservation)?.status ===
    ReservationStatus.RESERVED
      ? 'bg-yellow-400'
      : item?.find((reservation) => reservation)?.status ===
        ReservationStatus.COMPLETED
      ? 'bg-green-400'
      : 'bg-error-light'

  const textSize = 'lg:text-[1.6rem] text-[1rem]'

  return (
    <>
      {item?.map((v, i) => (
        <>
          {useModal?.open && (
            <ModalOverlay
              open={useModal?.open}
              onClose={useModal && useModal.modalHandler}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <ModalAlert
                  onClose={useModal && useModal.modalHandler}
                  submitHandler={
                    () => console.log(v)
                    // cancelReservation && cancelReservation(v.id)
                  }
                  buttonText='削除'
                >
                  この予約を<span className='text-error-main'>キャンセル</span>
                  しますか?{v.id}
                  <p className='lg:text-[1.4rem] text-[1.2rem]'>
                    ※<span className='text-error-main'>キャンセル</span>
                    すると取り消しできませんのでご注意ください。
                  </p>
                </ModalAlert>
              </div>
            </ModalOverlay>
          )}
          <CardTemplate classes='lg:m-5 mt-4 border rounded-lg' key={i} shadow>
            <div className='flex justify-between p-5 pt-2'>
              <div>
                <SubTitle text={v.shopName} />
                <div className='flex items-center mt-4 lg:m-0'>
                  <div className={`${textSize} mr-5 mt-4 text-gray-main`}>
                    <p>予約番号</p>
                    <hr />
                    <p className='text-primary-dark'>{v.id}</p>
                  </div>
                  <div className={`${textSize} mr-5 mt-4 text-gray-main`}>
                    <p>予約したメニュー</p>
                    <hr />
                    <p className='text-primary-dark'>{v.menuName}</p>
                  </div>
                  <div className={`${textSize} mt-4 text-gray-main`}>
                    <p>担当スタイリスト</p>
                    <hr />
                    <p className='text-primary-dark'>{v.stylistName}</p>
                  </div>
                </div>
              </div>

              <div className='grid h-full'>
                <span className={`${textSize} text-gray-main`}>
                  予約日:
                  <span className='text-primary-dark'>
                    {useConvertTime('ymdhm', v.reservationDate)}
                  </span>
                </span>
                <span
                  className={`${statusColor} ${
                    useModal ? 'mt-3' : 'mt-16'
                  } rounded-lg p-1 text-center text-secondary-light`}
                >
                  {useConvertStatus(v.status)}
                </span>
                {useModal && v.status !== ReservationStatus.COMPLETED && (
                  <Button
                    classes='mt-3 p-1 border-none bg-error-main text-secondary-light rounded-lg'
                    onClick={useModal.modalHandler}
                  >
                    キャンセルする
                  </Button>
                )}
              </div>
            </div>
          </CardTemplate>
        </>
      ))}
    </>
  )
}

export default ReservationItem
