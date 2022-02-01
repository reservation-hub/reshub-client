import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import { PATHS } from '@/constants/paths'
import SalonList from '@/components/list/shop/SalonList'
import { fetchShopList } from '@/store/actions/shopAction'
import SearchBox from '@/components/common/SearchBox'
import { useForm } from 'react-hook-form'
import Detail from './Detail'
import SubTemplate from '@/components/Template/SubTemplate'
import MainTemplate from '@/components/Template/MainTemplate'
import Button from '@/components/common/Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import useInfiniteScroll from '@/utils/hooks/useInfiniteScroll'
import { ShopForList } from '@/utils/api/request-response-types/client/models/Shop'
import history from '@/utils/routers/history'
import { OrderBy } from '@/utils/api/request-response-types/client/Common'

const Salon = ({ match }: RouteComponentProps) => {
  const dispatch = useDispatch()
  const { shops, loading } = useSelector((state: RootState) => state.shop)
  const [open, setOpen] = useState<boolean>(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  const { loadMore, more, page } = useInfiniteScroll<ShopForList>(shops)

  useEffect(() => {
    if (match.isExact)
      dispatch(fetchShopList({ page: page, order: OrderBy.DESC, take: 5 }))
  }, [dispatch, page, match.isExact])

  return (
    <Switch>
      <Route exact path={PATHS.SHOPS}>
        <SubTemplate>
          <div className='lg:hidden grid justify-end p-5'>
            <Button
              onClick={() => setOpen(!open)}
              classes='border-none flex justify-end'
            >
              <GiHamburgerMenu className='w-[3rem] h-[3rem] text-gray-main' />
            </Button>
            {open && <SearchBox control={control} />}
          </div>

          <div className='h-auto lg:fixed right-[22rem] lg:flex hidden justify-center'>
            <div className='lg:w-[40rem] lg:mt-14 mb-5'>
              <SearchBox
                control={control}
                buttonClass='w-full'
                searchFromArea={() => history.push(`${PATHS.SHOPS}/area`)}
              />
              <footer className='text-gray-main mt-5'>
                <span>Copyright© 2021 Reshub All rights reserved</span>
              </footer>
            </div>
          </div>

          <SalonList
            item={shops}
            loading={loading}
            useInfinite
            loadMore={loadMore}
            more={more}
          />
        </SubTemplate>
      </Route>

      <MainTemplate>
        <Route path={`${PATHS.SHOPS}/detail/:id`} component={Detail} />
        <Route path={`${PATHS.SHOPS}/(area|days|keyword|tags|rankings)`}>
          test
        </Route>
      </MainTemplate>
    </Switch>
  )
}

export default React.memo(Salon)
