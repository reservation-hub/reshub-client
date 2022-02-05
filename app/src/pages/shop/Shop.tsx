import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import SubTemplate from '@components/Template/SubTemplate'
import ListSearchBox from '@/components/list/shop/ListSearchBox'
import { OrderBy } from '@/utils/api/request-response-types/client/Common'
import SalonList from '@/components/list/shop/SalonList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShopList } from '@/store/actions/shopAction'
import { RootState } from '@/store/store'
import useInfiniteScroll from '@/utils/hooks/useInfiniteScroll'

const Shop = () => {
  const dispatch = useDispatch()
  const { shop } = useSelector((state: RootState) => state)

  const { loadMore, more, page } = useInfiniteScroll(shop.shops)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  useEffect(() => {
    dispatch(
      fetchShopList({
        page: page,
        order: OrderBy.DESC,
        take: 5
      })
    )
  }, [dispatch, page])

  return (
    <SubTemplate>
      <ListSearchBox control={control} />

      <SalonList
        item={shop.shops}
        loading={shop.loading}
        useInfiniteScroll={{ loadMore, page, more }}
      />
    </SubTemplate>
  )
}

export default React.memo(Shop)
