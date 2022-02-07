import React, { useEffect } from 'react'
import {
  searchToShopsNameSchema,
  SearchToShopsNameSchema
} from '@components/form/shop/searchSchema'
import ListSearchBox from '@components/shop/list/ListSearchBox'
import SalonList from '@components/shop/list/SalonList'
import SubTemplate from '@components/Template/SubTemplate'
import { RootState } from '@store/store'
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { searchToShopsName } from '@store/actions/shopAction'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import { PATHS } from '@constants/paths'
type Test = {
  keyword: string
}

const Search = ({ location }: RouteComponentProps<null, any, Test>) => {
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

  useEffect(() => {
    if (location.pathname === `${PATHS.SHOPS}/keyword`) {
      dispatch(
        searchToShopsName({
          page: page,
          order: OrderBy.DESC,
          take: 10,
          name: location.state?.keyword
        })
      )
    }
  }, [dispatch, location, page])

  return (
    <SubTemplate>
      <ListSearchBox control={control} />

      <SalonList
        useInfiniteScroll={{ loadMore, more, page }}
        item={shop.searchToName}
        loading={shop.loading}
      />
    </SubTemplate>
  )
}

export default Search
