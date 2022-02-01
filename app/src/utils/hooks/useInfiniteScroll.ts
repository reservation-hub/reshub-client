import { useState } from 'react'

const useInfiniteScroll = <V>(values: V[]) => {
  const [page, setPage] = useState<number>(1)
  const [more, setMore] = useState<boolean>(true)

  const loadMore = () => {
    setTimeout(() => {
      if (values?.length === 0 || values?.length < 5) {
        setMore(false)
      }
      setPage(page + 1)
    }, 1000)
  }

  return { loadMore, more, page }
}

export default useInfiniteScroll
