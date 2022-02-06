import React, { useCallback, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import SubTemplate from '@components/Template/SubTemplate'
import ListSearchBox from '@/components/list/shop/ListSearchBox'
import { OrderBy } from '@/utils/api/request-response-types/client/Common'
import SalonList from '@/components/list/shop/SalonList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShopList, searchToShopsName } from '@/store/actions/shopAction'
import { RootState } from '@/store/store'
import useInfiniteScroll from '@/utils/hooks/useInfiniteScroll'
import {
  searchToShopsNameSchema,
  SearchToShopsNameSchema
} from '@/components/form/shop/searchSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import history from '@/utils/routers/history'
import { PATHS } from '@/constants/paths'

const Shop = () => {
  const dispatch = useDispatch()
  const { shop } = useSelector((state: RootState) => state)

  const { loadMore, more, page } = useInfiniteScroll(shop.shops)

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
      // dispatch(
      //   searchToShopsName({
      //     page: page,
      //     order: OrderBy.DESC,
      //     take: 10,
      //     name: value.keyword
      //   })
      // )
      history.push(`${PATHS.SHOPS}/keyword/${value.keyword}`, { keyword: value.keyword })
    },
    [dispatch]
  )

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
      <ListSearchBox control={control} search={handleSubmit(onSubmit)} />

      <SalonList
        item={shop.shops}
        loading={shop.loading}
        useInfiniteScroll={{ loadMore, page, more }}
      />
    </SubTemplate>
  )
}

export default React.memo(Shop)
