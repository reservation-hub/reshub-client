import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import MainTemplate from '@/components/Template/MainTemplate'
import Box from '@/components/Template/Box'
import { Route, Switch } from 'react-router-dom'
import { PATHS } from '@/constants/paths'
import SalonList from '@/components/list/shop/SalonList'
import { fetchShopList } from '@/store/actions/shopAction'
import SearchBox from '@/components/common/SearchBox'
import { useForm } from 'react-hook-form'

const Salon = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState<number>(1)
  const [correct, setCorrect] = useState<'asc' | 'desc'>('desc')
  const { shops, loading } = useSelector((state: RootState) => state.shop)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  useEffect(() => {
    dispatch(fetchShopList(page, correct))
  }, [dispatch, page, correct])
  return (
    <MainTemplate>
      <Switch>
        <Route exact path={PATHS.SHOPS}>
          <section className='my-10 relative flex-grow lg:flex lg:w-[100rem] w-full mx-auto'>
            <Box title='店舗一覧' boxClass='border mx-auto'>
              <SalonList item={shops.values} loading={loading} />
            </Box>
            <div className='h-auto bg-primary'>
              <div className='mt-14'>
                <SearchBox control={control} />
              </div>
            </div>
          </section>
        </Route>
        <Route path={`${PATHS.SHOPS}/:id`}>
          <div>test</div>
        </Route>
      </Switch>
    </MainTemplate>
  )
}

export default Salon
