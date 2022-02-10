import React, { useEffect } from 'react'
import { getPopularShop, getShopsForIndex } from '@store/actions/shopAction'
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
import CardList from '@/components/list/CardList'

const Main = () => {
  const dispatch = useDispatch()

  const contestSection = 'lg:w-[100rem] w-full h-full mx-auto lg:mt-20 mt-5'

  const searchSection =
    'lg:w-[100rem] w-full md:flex justify-between lg:mx-auto px-5 pt-4 lg:p-0'

  const { shop } = useSelector((state: RootState) => state)

  const { loadMore, page, more } = useInfiniteScroll(shop.totalCount)

  const rankingColor = (ranking: number) => {
    switch (ranking) {
      case 1:
        return 'text-yellow-400'
      case 2:
        return 'text-gray-500'
      case 3:
        return 'text-yellow-800'
      default:
        return 'text-primary-dark'
    }
  }

  useEffect(() => {
    dispatch(getShopsForIndex({ page: page, order: OrderBy.DESC, take: 10 }))
    dispatch(getPopularShop())
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
          <Box boxClass='mb-4' title='ランキング' sectionClass='flex flex-wrap'>
            {Object.values(shop.popularShops).map((v, i) => (
              <div key={i} className='mx-auto'>
                <span className={rankingColor(v.ranking)}>{v.ranking}位</span>
                <CardList
                  img='/img/salon.jpeg'
                  name={v.name}
                  address={`${v.prefectureName}${v.cityName}${v.address || ''}`}
                  url={`${PATHS.SHOPS}/detail/${v.id}`}
                  buttonText='サロン情報を見る'
                />
              </div>
            ))}
          </Box>
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
