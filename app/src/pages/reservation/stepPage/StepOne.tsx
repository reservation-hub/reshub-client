import React, { useEffect, useState } from 'react'
import { fetchAllMenu } from '@store/actions/menuAction'
import { RootState } from '@store/store'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import { useDispatch, useSelector } from 'react-redux'
import { Control } from 'react-hook-form'
import Box from '@components/Template/Box'
import usePagination from '@utils/hooks/usePagination'
import Paginate from '@components/common/Paginate'
import LongCardList from '@components/list/LongCardList'
import {
  SelectedMenuValue,
  SelectedStylistValue
} from '@/components/reservation/_PropsTypes'
import Cookies from 'js-cookie'

export interface StepProps {
  shopId: string
  control: Control<any>
}

const StepOne = ({ shopId, control }: StepProps) => {
  const dispatch = useDispatch()
  const { pageHandler, page } = usePagination(1)

  const { menus } = useSelector((state: RootState) => state)

  const [selectedMenu, setSelectedMenu] = useState<SelectedMenuValue>({
    menuName: '',
    menuPrice: null,
    menuDuration: null
  })

  Cookies.set('selectedMenu', selectedMenu)

  useEffect(() => {
    dispatch(
      fetchAllMenu({
        shopId: Number(shopId),
        page: page,
        order: OrderBy.DESC
      })
    )
  }, [])

  return (
    <>
      <Box title='メニュー選択'>
        {menus.menus.map((v, i) => (
          <LongCardList
            key={i}
            useReservationForm
            control={control}
            menuId={v.id}
            name={v.name}
            price={v.price}
            duration={v.duration}
            setState={setSelectedMenu}
            img
            imgPath='/img/menu.jpeg'
            imgClasses='w-28 h-28'
            description='description'
            pageType='MENU_LIST'
            buttonText='このメニューで予約'
          />
        ))}
      </Box>
      <Paginate
        totalPage={menus.totalCount}
        page={page}
        pageChangeHandler={pageHandler}
      />
    </>
  )
}

export default StepOne
