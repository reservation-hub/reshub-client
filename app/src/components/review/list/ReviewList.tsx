import React from 'react'
import Box from '@components/Template/Box'
import { UserReviewListResponse } from '@utils/api/request-response-types/client/User'
import InfiniteScroll from 'react-infinite-scroller'
import { ListProps } from '@components/list/_PropsType'
import ReviewItem from './ReviewItem'
import { Link } from 'react-router-dom'
import { PATHS } from '@constants/paths'
import EmptyData from '@/components/common/EmptyData'

export interface ReviewListProps<T> extends ListProps<T> {
  deleteReview: (reviewId: number, shopId: number) => void
}

const ReviewList = <T extends UserReviewListResponse>({
  item,
  useInfiniteScroll,
  deleteReview
}: ReviewListProps<T>) => {
  return (
    <div className='w-[69rem] z-10'>
      <Link to={PATHS.USER} className=''>
        トップに戻る
      </Link>

      <Box title={`${item?.totalCount}件の口コミがございます`} boxClass='mt-4'>
        {item?.values?.length === 0 ? (
          <EmptyData text='口コミ' />
        ) : (
          <InfiniteScroll
            loadMore={useInfiniteScroll.loadMore}
            hasMore={useInfiniteScroll.more}
            initialLoad={false}
            pageStart={0}
            loader={<span key={0}>loading...</span>}
          >
            <ReviewItem item={item?.values} deleteReview={deleteReview} />
          </InfiniteScroll>
        )}
      </Box>
    </div>
  )
}

export default ReviewList
