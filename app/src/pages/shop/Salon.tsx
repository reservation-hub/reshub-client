import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Box from '@/components/Template/Box'
import { Route, Switch } from 'react-router-dom'
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

const Salon = () => {
  const dispatch = useDispatch()
  const { shops, loading } = useSelector((state: RootState) => state.shop)
  const [open, setOpen] = useState<boolean>(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  useEffect(() => {
    dispatch(fetchShopList(1, 'desc'))
  }, [dispatch])

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
              <SearchBox control={control} buttonClass='w-full' />
              <footer className='text-gray-main'>
                <span>Copyright© 2021 Reshub All rights reserved</span>
              </footer>
            </div>
          </div>
          <Box title='店舗一覧'>
            <SalonList
              item={shops.values ? shops.values : []}
              loading={loading}
              useInfinite
            />
          </Box>
        </SubTemplate>
      </Route>

      <MainTemplate>
        <Route path={`${PATHS.SHOPS}/:id`} component={Detail} />
      </MainTemplate>
    </Switch>
  )
}

export default Salon
