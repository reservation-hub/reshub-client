import React from 'react'
import Box from '@components/Template/Box'
import { StylistForList } from '@utils/api/request-response-types/client/models/Stylist'
import { IInDetailListProps } from '@components/list/_PropsType'
import StylistItem from './StylistItme'
import InfiniteScroll from 'react-infinite-scroller'

const StylistList = <T extends StylistForList[]>({
  item,
  boxText,
  inDetailPage,
  loading,
  useInfinite,
  gotoSection
}: IInDetailListProps<T>) => {
  const showAllButton =
    'flex justify-end p-5 border-none text-gray-main cursor-pointer text-[1.4rem]'

  return (
    <>
      {useInfinite ? (
        <Box title={boxText}>
          {/* <InfiniteScroll
            loadMore
            pageStart={0}
            hasMore={}
            initialLoad={false}
          >
            <StylistItem item={item} loading={loading} />
          </InfiniteScroll> */}
        </Box>
      ) : (
        <Box title={boxText}>
          <StylistItem item={item} loading={loading} />
          {inDetailPage && (
            <div className={showAllButton} onClick={gotoSection}>
              全てのスタイリストを見る
            </div>
          )}
        </Box>
      )}
    </>
  )
}

export default StylistList
