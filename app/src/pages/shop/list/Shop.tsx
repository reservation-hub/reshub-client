import React, { useCallback, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import SubTemplate from '@components/Template/SubTemplate'
import ListSearchBox from '@/components/shop/list/ListSearchBox'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import SalonList from '@/components/shop/list/SalonList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShopList } from '@store/actions/shopAction'
import { RootState } from '@store/store'
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'
import {
  searchToShopsNameSchema,
  SearchToShopsNameSchema
} from '@components/form/shop/searchSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { PATHS } from '@/constants/paths'
import history from '@/utils/routers/history'

const Shop = () => {
  const dispatch = useDispatch()
  const { shop } = useSelector((state: RootState) => state)

  const { loadMore, more, page } = useInfiniteScroll(shop.totalCount)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SearchToShopsNameSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(searchToShopsNameSchema),
    defaultValues: {
      keyword: ''
    }
  })

  const onSubmit: SubmitHandler<SearchToShopsNameSchema> = useCallback(
    (value) => {
      history.push(`${PATHS.SHOPS}/keyword`, {
        keyword: value.keyword
      })
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(
      fetchShopList({
        page: page,
        order: OrderBy.DESC,
        take: 10
      })
    )
  }, [dispatch, page])

  return (
    <SubTemplate>
      <ListSearchBox control={control} search={handleSubmit(onSubmit)} />

      <SalonList
        item={shop.searchToName.length !== 0 ? shop.searchToName : shop.shops}
        loading={shop.loading}
        useInfiniteScroll={{ loadMore, page, more }}
      />
    </SubTemplate>
  )
}

export default React.memo(Shop)
