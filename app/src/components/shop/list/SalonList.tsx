import React from 'react'
import { ListProps } from '@components/list/_PropsType'
import InfiniteScroll from 'react-infinite-scroller'
import Box from '@components/Template/Box'
import { ShopForList } from '@utils/api/request-response-types/client/models/Shop'
import ShopCardLoading from './ShopCardLoading'
import LongCardList from '@/components/list/LongCardList'
import { PATHS } from '@/constants/paths'

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
    <Box title='店舗一覧' boxClass='z-10'>
      {loading && <ShopCardLoading count={10} />}
      <InfiniteScroll
        loadMore={useInfiniteScroll.loadMore}
        pageStart={0}
        hasMore={useInfiniteScroll.more}
        initialLoad={false}
        loader={<ShopCardLoading key={0} count={1} />}
      >
        {rowItems?.map((v, i) => (
          <LongCardList
            key={i}
            img
            link={`${PATHS.SHOPS}/detail/${v.id}`}
            name={v.name}
            headerSectionText={`${v.reviewsCount}件の口コミ`}
            address={v.address}
            time={`${v.startTime} - ${v.endTime}`}
            price={v.averageMenuPrice}
            tags={v.tags}
            buttonLink={`${PATHS.RESERVATION}/${v.id}`}
            buttonText='空席確認・予約'
            tel='090-1234-1234'
            imgPath='img/salon.jpeg'
            imgClasses='w-40 h-40'
            description='shop description'
            pageType='SHOP_LIST'
          />
        ))}
      </InfiniteScroll>
    </Box>
  )
}
export default SalonList
