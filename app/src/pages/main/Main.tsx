import React, { useEffect } from 'react'
import { getShopsForIndex } from '@store/actions/shopAction'
import SalonList from '@components/shop/list/SalonList'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/store'
import '@styles/global.css'
import SearchBox from '@components/common/SearchBox'
import Box from '@components/Template/Box'
import MainTemplate from '@components/Template/MainTemplate'
import history from '@utils/routers/history'
import { PATHS } from '@constants/paths'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'

const Main = () => {
  const dispatch = useDispatch()

  const contestSection = 'lg:w-[100rem] w-full h-full mx-auto lg:mt-20 mt-5'

  const searchSection =
    'lg:w-[100rem] w-full md:flex justify-between lg:mx-auto px-5 pt-4 lg:p-0'

  const { shop } = useSelector((state: RootState) => state)

  const { loadMore, page, more } = useInfiniteScroll(shop.totalCount)

  useEffect(() => {
    dispatch(getShopsForIndex({ page: page, order: OrderBy.DESC, take: 10 }))
  }, [page, dispatch])

  return (
    <MainTemplate>
      <div className='w-full h-[30rem] text-center bg-primary'>
        <div className={searchSection}>
          <div className='md:grid hidden text-secondary-light m-auto'>
            <span className='lg:text-[3.8rem] text-[3.1rem] text-left'>
              <p>あなたにぴったりな</p>
              <p>サロンの見つけ方</p>
            </span>
          </div>
          <SearchBox
            classes='md:w-[45rem] w-full lg:h-[28.5rem] h-[26rem]'
            searchFromTags={() => history.push(`${PATHS.SHOPS}/tags`)}
          />
        </div>
      </div>

      <div className={contestSection}>
        <div className='h-full lg:mb-0 mb-5'>
          <Box boxClass='h-[20rem] mb-4' title='ランキング'></Box>
          <SalonList
            item={shop.fetchIndex}
            loading={shop.loading}
            useInfiniteScroll={{ loadMore, page, more }}
          />
        </div>
      </div>
    </MainTemplate>
  )
}

export default Main
