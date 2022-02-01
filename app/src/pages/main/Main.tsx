import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { fetchIndexList, fetchShopList } from '@store/actions/shopAction'
import { TCurrentPage } from '@components/list/_PropsType'
import SalonList from '@components/list/shop/SalonList'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/store'
import '@styles/global.css'
import SearchBox from '@components/common/SearchBox'
import Box from '@components/Template/Box'
import { MatchParams } from '@components/_PropsTypes'
import { useForm } from 'react-hook-form'
import MainTemplate from '@/components/Template/MainTemplate'
import Section from '@/components/Template/Section'
import history from '@/utils/routers/history'
import { PATHS } from '@/constants/paths'
import { OrderBy } from '@/utils/api/request-response-types/client/Common'

const Main = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TCurrentPage>) => {
  const dispatch = useDispatch()
  const currentPage = location?.state?.currentPage ?? 1
  const [page] = useState<number>(currentPage)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  const contestSection =
    'lg:w-[100rem] w-full h-full mx-auto lg:mt-20 mt-5 lg:flex lg:justify-between'

  const searchSection =
    'lg:w-[100rem] w-full md:flex justify-between lg:mx-auto px-5 pt-4 lg:p-0'

  const { fetchIndex, loading } = useSelector((state: RootState) => state.shop)

  useEffect(() => {
    if (match.isExact)
      dispatch(fetchIndexList({ page: page, order: OrderBy.DESC, take: 5 }))
  }, [page, dispatch, currentPage, match.isExact])

  return (
    <MainTemplate>
      <Section>
        <div className='w-full h-[30rem] text-center bg-primary'>
          <div className={searchSection}>
            <div className='md:grid hidden text-secondary-light m-auto'>
              <span className='lg:text-[3.8rem] text-[3.1rem] text-left'>
                <p>あなたにぴったりな</p>
                <p>サロンの見つけ方</p>
              </span>
            </div>
            <SearchBox
              control={control}
              classes='md:w-[45rem] w-full lg:h-[28.5rem] h-[26rem]'
              searchFromArea={() => history.push(`${PATHS.SHOPS}/area`)}
            />
          </div>
        </div>

        <div className={contestSection}>
          <div className='lg:w-[60rem] w-full h-full lg:mb-0 mb-5'>
            <Box boxClass='h-[20rem] mb-4' title='ランキング'></Box>
            <SalonList
              item={fetchIndex.values}
              page={currentPage}
              loading={loading}
              loadMore={() => console.log('test')}
            />
          </div>
          <div className='lg:w-[38rem] w-full text-center'>
            <Box boxClass='mb-4' title='キャンペーン'>
              <div className='p-5'>
                <span>準備中です。</span>
              </div>
            </Box>
            <Box title='運営からのお知らせ'>
              <div className='p-5'>
                <span>準備中です。</span>
              </div>
            </Box>
          </div>
        </div>
      </Section>
    </MainTemplate>
  )
}

export default Main
