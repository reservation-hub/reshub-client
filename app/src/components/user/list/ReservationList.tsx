import React from 'react'
import Box from '@components/Template/Box'
import { UserReservationListResponse } from '@utils/api/request-response-types/client/User'
import InfiniteScroll from 'react-infinite-scroller'
import { ListProps } from '@components/list/_PropsType'
import { Link } from 'react-router-dom'
import { PATHS } from '@constants/paths'
import CardLoading from '../../shop/list/ShopCardLoading'
import LongCardList from '../../list/LongCardList'
import useConvertTime from '@/utils/hooks/useConvertTime'

export interface ReservationListProps<T> extends ListProps<T> {
  cancelReservation: (reservationId: number) => void
}

const ReservationList = <T extends UserReservationListResponse>({
  item,
  loading,
  useInfiniteScroll,
  cancelReservation
}: ReservationListProps<T>) => {
  return (
    <div className='w-[69rem] z-10'>
      <Link to={PATHS.USER} className=''>
        トップに戻る
      </Link>

      <Box title={`${item?.totalCount}件の予約がございます`} boxClass='mt-4'>
        {loading && <CardLoading count={10} />}
        <InfiniteScroll
          loadMore={useInfiniteScroll.loadMore}
          hasMore={useInfiniteScroll.more}
          initialLoad={false}
          pageStart={0}
          loader={<CardLoading key={0} count={1} />}
        >
          {item?.values.map((v, i) => (
            <LongCardList
              key={i}
              name={v.shopName}
              headerSectionText={`予約日: ${useConvertTime(
                'ymdhm',
                v.reservationDate
              )}`}
              menuName={v.menuName}
              stylistName={v.stylistName}
              reservationId={v.id}
              reservationStatus={v.status}
              cancelReservation={cancelReservation}
              link='#'
              pageType='RESERVATION_LIST'
            />
          ))}
        </InfiniteScroll>
      </Box>
    </div>
  )
}

export default ReservationList