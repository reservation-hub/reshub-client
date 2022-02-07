import React from 'react'
import { StylistForList } from '@utils/api/request-response-types/client/models/Stylist'
import { ListProps } from '@components/list/_PropsType'
import StylistItem from './StylistItem'
import InfiniteScroll from 'react-infinite-scroller'

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
      <InfiniteScroll
        loadMore={useInfiniteScroll.loadMore}
        pageStart={0}
        hasMore={Number(length) > 10 ? useInfiniteScroll.more : false}
        initialLoad={false}
      >
        <StylistItem item={item} loading={loading} />
      </InfiniteScroll>
    </>
  )
}

export default StylistList
