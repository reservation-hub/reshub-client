import { useState } from 'react'

export type UseInfiniteScroll = {
  loadMore: () => void
  more: boolean
  page: number
}

const useInfiniteScroll = (values: number) => {
  const [page, setPage] = useState<number>(1)
  const [more, setMore] = useState<boolean>(true)

  const loadMore = () => {
    setTimeout(() => {
      if (values === 0 || values < 10) {
        setMore(false)
      }

      setPage(page + 1)
    }, 1000)
  }

  return { loadMore, more, page }
}

export default useInfiniteScroll
