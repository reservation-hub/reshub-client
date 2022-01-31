import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import { ShopForList } from '@utils/api/request-response-types/models/Shop'
import ShopItem from '@components/list/shop/ShopItem'
import CardLoading from './CardLoading'
import InfiniteScroll from 'react-infinite-scroller'

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
  const rowItems: ShopForList[] = item?.map((shop: ShopForList) => ({
    ...shop,
    address: `${shop.prefectureName}${shop.cityName}${shop.address || ''}`
  }))

  return (
    <>
      {useInfinite ? (
        <InfiniteScroll
          loadMore={loadMore}
          pageStart={0}
          hasMore={more}
          initialLoad={false}
          loader={<CardLoading key={0} />}
        >
          {rowItems?.map((v: any, i: number) => (
            <ShopItem key={i} item={v} />
          ))}
        </InfiniteScroll>
      ) : (
        <>
          {loading && <CardLoading />}
          {item?.map((v: ShopForList, i: number) =>
            loading ? <CardLoading key={v.id} /> : <ShopItem key={i} item={v} />
          )}
        </>
      )}
    </>
  )
}
export default SalonList
