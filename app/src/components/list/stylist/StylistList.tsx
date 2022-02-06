import React from 'react'
import { StylistForList } from '@utils/api/request-response-types/client/models/Stylist'
import { ListProps } from '@components/list/_PropsType'
import StylistItem from './StylistItem'
import InfiniteScroll from 'react-infinite-scroller'

const StylistList = <T extends StylistForList[]>({
  item,
  loading,
  useInfiniteScroll
}: ListProps<T>) => {
  return (
    <>
      <InfiniteScroll
        loadMore={useInfiniteScroll.loadMore}
        pageStart={0}
        hasMore={useInfiniteScroll.more}
        initialLoad={false}
      >
        <StylistItem item={item} loading={loading} />
      </InfiniteScroll>
    </>
  )
}

export default StylistList
