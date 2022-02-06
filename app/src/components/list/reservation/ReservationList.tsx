import React from 'react'
import Box from '@/components/Template/Box'
import { UserReservationListResponse } from '@/utils/api/request-response-types/client/User'
import InfiniteScroll from 'react-infinite-scroller'
import { ListProps } from '../_PropsType'
import ReservationItem from './ReservationItem'
import { Link } from 'react-router-dom'
import { PATHS } from '@/constants/paths'
import ModalOverlay from '@/components/modal/ModalOverlay'
import { useModal } from '@/utils/hooks/useModal'
import ModalAlert from '@/components/modal/ModalAlert'

export interface ReservationListProps<T> extends ListProps<T> {
  cancelReservation?: (id: number) => void
}

const ReservationList = <T extends UserReservationListResponse>({
  item,
  useInfiniteScroll,
  cancelReservation
}: ReservationListProps<T>) => {
  const { open, modalHandler } = useModal(false)

  return (
    <div className='w-[69rem] z-10'>
      <Link to={PATHS.USER} className=''>
        トップに戻る
      </Link>

      <Box title={`${item?.totalCount}件の予約がございます`} boxClass='mt-4'>
        <InfiniteScroll
          loadMore={useInfiniteScroll.loadMore}
          hasMore={useInfiniteScroll.more}
          initialLoad={false}
          pageStart={0}
          loader={<span key={0}>loading...</span>}
        >
          <ReservationItem
            item={item?.values}
            cancelReservation={cancelReservation}
            useModal={{ open, modalHandler }}
          />
        </InfiniteScroll>
      </Box>
    </div>
  )
}

export default ReservationList
