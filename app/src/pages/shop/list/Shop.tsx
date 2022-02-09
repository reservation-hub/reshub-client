import React, { useEffect } from 'react'
import SubTemplate from '@components/Template/SubTemplate'
import ListSearchBox from '@components/shop/list/ListSearchBox'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import SalonList from '@components/shop/list/SalonList'
import { useDispatch, useSelector } from 'react-redux'
import { getShops } from '@store/actions/shopAction'
import { RootState } from '@store/store'
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'

const Shop = () => {
  const dispatch = useDispatch()
  const { shop } = useSelector((state: RootState) => state)

  const { loadMore, more, page } = useInfiniteScroll(shop.totalCount)

  useEffect(() => {
    dispatch(
      getShops({
        page: page,
        order: OrderBy.DESC,
        take: 10
      })
    )
  }, [dispatch, page])

  return (
    <SubTemplate>
      <ListSearchBox />

      <SalonList
        item={shop.shops}
        loading={shop.loading}
        useInfiniteScroll={{ loadMore, page, more }}
      />
    </SubTemplate>
  )
}

export default React.memo(Shop)
