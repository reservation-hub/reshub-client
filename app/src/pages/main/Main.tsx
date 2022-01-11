import React, { useEffect, useState } from 'react'
import MainTemplate from '@components/Template/MainTemplate'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import { fetchShopList } from '@store/actions/shopAction'
import { MatchParams } from '@components/common/_PropsType'
import { TCurrentPage } from '@components/list/_PropsType'
import SalonList from '@components/list/shop/SalonList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/store'
import '@styles/global.css'
import SearchBox from '@components/common/SearchBox'
import Box from '@components/Template/Box'
import usePagination from '@utils/hooks/usePagination'

const  Main = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TCurrentPage>) => {
  console.log('in main page')
  const dispatch = useDispatch()
  const currentPage = location?.state?.currentPage ?? 1
  const [page, setPage] = useState<number>(currentPage)
  const [correct, setCorrect] = useState<boolean>(true)
  const order: 'asc' | 'desc' = correct ? 'desc' : 'asc'

  const contentsBox =
    'w-[100rem] h-full mx-auto mt-20 flex text-[1.6rem] justify-between'

  const { shops, loading, user } = useSelector(
    (state: RootState) => ({
      loading: state.shop.loading,
      shops: state.shop.shops,
      user: state.auth.user
    }),
    shallowEqual
  )
  const authCheck = user?.role?.name === 'admin'

  const pageChangeHandler = usePagination(
    authCheck ? 'salon' : 'shops',
    page,
    setPage
  )

  console.log(user, shops, loading)

  useEffect(() => {
    if (match.isExact) dispatch(fetchShopList(Number(currentPage), order))
  }, [page, dispatch, currentPage, match.isExact, order])

  return (
    <MainTemplate>
      <section className='mb-20'>
        <div className='w-full h-[30rem] mt-20 text-center bg-primary'>
          <div className='w-[100rem] flex justify-between mx-auto'>
            <div className='grid text-secondary-light mr-[14rem]'>
              <span className='text-[3.8rem] m-auto'>
                あなたにぴったりな <br /> サロンを見つけ方
              </span>
            </div>
            <SearchBox />
          </div>
        </div>

        <div className={contentsBox}>
          <div className='w-[60rem] h-full'>
            <Box boxClass='h-[19.7rem]' title='ランキング'></Box>
            <SalonList
              item={shops.values}
              admin={authCheck}
              totalPage={shops.totalCount}
              page={currentPage}
              // pageChangeHandler={pageChangeHandler}
            />
          </div>
          <div className='w-[38.5rem]'>
            <Box boxClass='h-[55rem]' title='キャンペーン'></Box>
            <Box boxClass='h-[50.2rem] mt-16' title='運営からのお知らせ'></Box>
          </div>
        </div>
      </section>
    </MainTemplate>
  )
}

export default Main
