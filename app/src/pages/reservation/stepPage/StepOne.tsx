import React, { useEffect } from 'react'
import { fetchAllMenu } from '@/store/actions/menuAction'
import { RootState } from '@/store/store'
import { OrderBy } from '@/utils/api/request-response-types/client/Common'
import { useDispatch, useSelector } from 'react-redux'
import MenuList from '@components/list/menu/MenuList'
import { Control } from 'react-hook-form'
import Box from '@/components/Template/Box'

export interface StepProps {
  shopId: string
  control: Control<any>
}

const StepOne = ({ shopId, control }: StepProps) => {
  const dispatch = useDispatch()

  const { menus } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(
      fetchAllMenu({
        shopId: Number(shopId),
        page: 1,
        order: OrderBy.DESC
      })
    )
  }, [])

  return (
    <Box title='メニュー選択'>
      <MenuList item={menus.menus} useReservationPage control={control} />
    </Box>
  )
}

export default StepOne
