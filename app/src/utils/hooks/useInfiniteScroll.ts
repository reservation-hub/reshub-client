import instance from '@utils/api'
import { ShopListResponse } from '../api/request-response-types/Shop'
import { useState } from 'react'

const useInfiniteScroll = <T extends ShopListResponse, K>(
  values: K[],
  baseEndpoint: string
) => {
  const [page, setPage] = useState<number>(1)
  const [more, setMore] = useState<boolean>(true)
  const [list, setList] = useState<K[] | Record<string, any>[]>(values)

  const loadMore = async () => {
    setTimeout(async () => {
      const pages = page + 1
      const res = await instance.get<T>(
        `${baseEndpoint}?page=${pages}&order=desc`
      )

      const data = res.data.values.map((value) => ({
        ...value,
        address: `${value.prefectureName}${value.cityName}${
          value.address || ''
        }`
      }))

      if (data.length === 0) {
        setMore(false)
        return
      }

      setList([...list, ...data])
      setPage(page + 1)
    }, 1500)
  }

  return { loadMore, more, list, page }
}

export default useInfiniteScroll
