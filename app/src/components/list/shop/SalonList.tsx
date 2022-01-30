import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import { ShopForList } from '@utils/api/request-response-types/models/Shop'
import ShopItem from '@components/list/shop/ShopItem'
import CardLoading from './CardLoading'
import InfiniteScroll from 'react-infinite-scroller'
import useInfiniteScroll from '@/utils/hooks/useInfiniteScroll'
import { baseEndpoint } from '@/utils/api/apiEndpoint'
import { ShopListResponse } from '@/utils/api/request-response-types/Shop'

const SalonList = ({ item, loading, useInfinite }: IListProps) => {
  const rowItems: ShopForList[] = item?.map((shop: ShopForList) => ({
    ...shop,
    address: `${shop.prefectureName}${shop.cityName}${shop.address || ''}`
  }))

  const { loadMore, more, list } = useInfiniteScroll<
    ShopListResponse,
    ShopForList
  >(rowItems, baseEndpoint.shops)

  return (
    <>
      {useInfinite ? (
        <InfiniteScroll
          loadMore={loadMore}
          pageStart={0}
          hasMore={more}
          loader={<CardLoading key={0} />}
        >
          {list?.map((v, i) => (
            <ShopItem key={i} item={v} />
          ))}
        </InfiniteScroll>
      ) : (
        <>
          {loading && <CardLoading />}
          {rowItems?.map((v, i) =>
            loading ? <CardLoading key={v.id} /> : <ShopItem key={i} item={v} />
          )}
        </>
      )}
    </>
  )
}
export default SalonList
