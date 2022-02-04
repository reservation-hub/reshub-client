import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import ShopItem from '@components/list/shop/ShopItem'
import CardLoading from './CardLoading'
import InfiniteScroll from 'react-infinite-scroller'
import Box from '@components/Template/Box'
import { ShopForList } from '@/utils/api/request-response-types/client/models/Shop'

export interface ISalonListProps<T> extends IListProps<T> {
  loadMore(page: number): void | undefined
  more?: boolean
}

const SalonList = <T extends ShopForList[]>({
  item,
  loading,
  useInfinite,
  loadMore,
  more
}: ISalonListProps<T>) => {
  const rowItems = item?.map((shop: ShopForList) => ({
    ...shop,
    address: `${shop.prefectureName}${shop.cityName}${shop.address || ''}`
  }))

  return (
    <Box title='店舗一覧'>
      {useInfinite ? (
        <InfiniteScroll
          loadMore={loadMore}
          pageStart={0}
          hasMore={more}
          initialLoad={false}
          loader={<CardLoading key={0} />}
        >
          <ShopItem item={rowItems} />
        </InfiniteScroll>
      ) : (
        <>{loading ? <CardLoading /> : <ShopItem item={rowItems} />}</>
      )}
    </Box>
  )
}
export default SalonList
