import React from 'react'
import { ListProps } from '@components/list/_PropsType'
import ShopItem from '@components/list/shop/ShopItem'
import InfiniteScroll from 'react-infinite-scroller'
import Box from '@components/Template/Box'
import { ShopForList } from '@utils/api/request-response-types/client/models/Shop'
import ShopCardLoading from './ShopCardLoading'

const SalonList = <T extends ShopForList[]>({
  item,
  loading,
  useInfiniteScroll
}: ListProps<T>) => {
  const rowItems = item?.map((shop: ShopForList) => ({
    ...shop,
    address: `${shop.prefectureName}${shop.cityName}${shop.address || ''}`
  }))

  return (
    <Box title='店舗一覧'>
      {loading && <ShopCardLoading count={10} />}
      <InfiniteScroll
        loadMore={useInfiniteScroll.loadMore}
        pageStart={0}
        hasMore={useInfiniteScroll.more}
        initialLoad={false}
        loader={<ShopCardLoading key={0} count={1} />}
      >
        <ShopItem item={rowItems} />
      </InfiniteScroll>
    </Box>
  )
}
export default SalonList
