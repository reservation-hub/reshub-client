import React, { useEffect } from 'react'
import ListSearchBox from '@components/shop/list/ListSearchBox'
import SalonList from '@components/shop/list/SalonList'
import SubTemplate from '@components/Template/SubTemplate'
import { RootState } from '@store/store'
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import {
  searchShopsToLocation,
  searchToShopsName
} from '@store/actions/shopAction'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import { PATHS } from '@constants/paths'

type SearchParams = {
  keyword?: string
  areaId?: string
  prefectureId?: string
  cityId?: string
}

const Search = ({ location }: RouteComponentProps<null, any, SearchParams>) => {
  const dispatch = useDispatch()
  const { shop } = useSelector((state: RootState) => state)
  const { loadMore, more, page } = useInfiniteScroll(shop.totalCount)

  useEffect(() => {
    if (location.pathname === `${PATHS.SHOPS}/keyword`) {
      dispatch(
        searchToShopsName({
          page: page,
          order: OrderBy.DESC,
          take: 10,
          name: String(location.state?.keyword)
        })
      )
    } else if (location.pathname === `${PATHS.SHOPS}/area`) {
      dispatch(
        searchShopsToLocation({
          page: page,
          order: OrderBy.DESC,
          take: 10,
          areaId: Number(location.state?.areaId),
          prefectureId: Number(location.state?.prefectureId) ?? undefined,
          cityId: Number(location.state?.cityId) ?? undefined
        })
      )
    }
  }, [dispatch, location, page])

  return (
    <SubTemplate>
      <ListSearchBox />

      <SalonList
        useInfiniteScroll={{ loadMore, more, page }}
        item={shop.searchToName}
        loading={shop.loading}
      />
    </SubTemplate>
  )
}

export default Search
