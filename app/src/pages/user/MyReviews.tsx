import React, { useCallback, useEffect } from 'react'
import MypageMenu from '@components/detail/user/MypageMenu'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { getUserReviews, deleteReview } from '@/store/actions/reviewAction'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'
import SubTemplate from '@components/Template/SubTemplate'
import ReviewList from '@/components/review/list/ReviewList'

const MyReviews = () => {
  const dispatch = useDispatch()
  const { review } = useSelector((state: RootState) => state)
  const { loadMore, more, page } = useInfiniteScroll(
    review.userReviewsTotalCount
  )
  const rowItems = {
    values: review.userReviews,
    totalCount: review.userReviewsTotalCount
  }

  const deleteUserReview = useCallback(
    (reviewId: number, shopId: number) => {
      dispatch(deleteReview({ reviewId, shopId }))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(
      getUserReviews({
        page: page,
        order: OrderBy.DESC,
        take: 10
      })
    )
  }, [dispatch, page, getUserReviews])

  return (
    <SubTemplate>
      <div className='flex'>
        <MypageMenu />
        <ReviewList
          useInfiniteScroll={{ loadMore, more, page }}
          item={rowItems}
          deleteReview={deleteUserReview}
        />
      </div>
    </SubTemplate>
  )
}

export default MyReviews
