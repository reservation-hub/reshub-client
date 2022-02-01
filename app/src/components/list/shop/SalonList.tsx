import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import { ShopForList } from '@utils/api/request-response-types/models/Shop'
import ShopItem from '@components/list/shop/ShopItem'
import CardLoading from './CardLoading'
import InfiniteScroll from 'react-infinite-scroller'
import Box from '@/components/Template/Box'

export interface ISalonListProps extends IListProps {
  loadMore(page: number): void | undefined
  more?: boolean
}

const SalonList = ({
  item,
  loading,
  useInfinite,
  loadMore,
  more
}: ISalonListProps) => {
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
          <ShopItem
            cell={[
              { type: 'header', key: 'name' },
              { type: 'body', key: 'address' }
            ]}
            items={rowItems}
          />
        </InfiniteScroll>
      ) : (
        <>
          {loading ? (
            <CardLoading />
          ) : (
            <ShopItem
              cell={[
                { type: 'header', key: 'name' },
                { type: 'body', key: 'address' }
              ]}
              items={rowItems}
            />
          )}
        </>
      )}
    </Box>
  )
}
export default SalonList
