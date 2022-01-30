import instance from '@utils/api'
import { ShopListResponse } from '../api/request-response-types/Shop'
import { useState } from 'react'

const useInfiniteScroll = <T extends ShopListResponse, K>(
  values: K[],
  baseEndpoint: string
) => {
  const [page, setPage] = useState<number>(0)
  const [more, setMore] = useState<boolean>(true)
  const [list, setList] = useState<K[] | Record<string, any>[]>(values)

  const loadMore = async () => {
    setTimeout(async () => {
      const pages = page + 1
      const res = await instance.get<T>(
        `${baseEndpoint}?page=${pages}&order=desc`
      )

      const data: K[] | Record<string, any>[] = res.data.values.map(
        (value) => ({
          ...value,
          address: `${value.prefectureName}${value.cityName}${
            value.address || ''
          }`
        })
      )

      if (data.length === 0 || data.length < 5) {
        setMore(false)
      }

      setList([...list, ...data])
      setPage(page + 1)
    }, 1500)
  }

  return { loadMore, more, list, page }
}

export default useInfiniteScroll
