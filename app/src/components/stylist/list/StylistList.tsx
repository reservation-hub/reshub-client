import React from 'react'
import { StylistForList } from '@utils/api/request-response-types/client/models/Stylist'
import { ListProps } from '@components/list/_PropsType'
import InfiniteScroll from 'react-infinite-scroller'
import CardList from '../../list/CardList'
import CardLoading from '../../list/CardLoading'

export interface StylistListProps<T> extends ListProps<T> {
  length?: number
}

const StylistList = <T extends StylistForList[]>({
  item,
  loading,
  useInfiniteScroll,
  length
}: StylistListProps<T>) => {
  return (
    <>
      {loading ? (
        <div className='flex flex-wrap justify-between px-5 pb-5 text-[1.4rem]'>
          <CardLoading count={10} price />
        </div>
      ) : (
        <InfiniteScroll
          loadMore={useInfiniteScroll.loadMore}
          pageStart={0}
          hasMore={Number(length) > 10 ? useInfiniteScroll.more : false}
          initialLoad={false}
        >
          <div className='flex flex-wrap justify-between px-5 pb-5 text-[1.4rem]'>
            {item?.map((v, i) => (
              <CardList
                key={i}
                icon
                name={v.name}
                price={v.price}
                buttonText='指名して予約'
              />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  )
}

export default StylistList
