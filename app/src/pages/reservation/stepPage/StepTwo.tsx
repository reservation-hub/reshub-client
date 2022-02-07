import React, { useEffect } from 'react'
import { RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import {
  getReservation,
  getStylistReservation
} from '@store/actions/reservationAction'
import { StepProps } from './StepOne'
import { fetchAllStylist } from '@store/actions/stylistAction'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import CardList from '@components/list/CardList'
import Box from '@components/Template/Box'
import CardLoading from '@components/list/CardLoading'
import Paginate from '@components/common/Paginate'
import usePagination from '@utils/hooks/usePagination'

const StepTwo = ({ shopId, control }: StepProps) => {
  const dispatch = useDispatch()
  const { reservation, stylist } = useSelector((state: RootState) => state)
  const { pageHandler, page } = usePagination(1)

  const day = dayjs().format('YYYY-MM-DD')

  console.log(reservation.stylistReservation, reservation.shopReservation)
  useEffect(() => {
    dispatch(
      getReservation({
        shopId: Number(shopId),
        reservationDate: day
      })
    )
    dispatch(getStylistReservation(Number(shopId)))
    dispatch(
      fetchAllStylist({
        shopId: Number(shopId),
        page: 1,
        order: OrderBy.DESC
      })
    )
  }, [])

  return (
    <>
      <Box title='スタイリスト選択' boxClass='pb-4'>
        <div className='flex flex-wrap w-full justify-between px-5 mb-5'>
          {stylist.loading ? (
            <CardLoading price count={10} />
          ) : (
            <>
              {stylist.stylists.map((v, i) => (
                <CardList
                  key={i}
                  icon
                  useReservationForm
                  control={control}
                  name={v.name}
                  price={v.price}
                  id={v.id}
                  buttonText='選択'
                />
              ))}
            </>
          )}
        </div>
      </Box>
      <Paginate
        totalPage={stylist.totalCount}
        page={page}
        pageChangeHandler={pageHandler}
      />
    </>
  )
}

export default StepTwo
