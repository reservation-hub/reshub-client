import React from 'react'
import LongCardList from '@components/list/LongCardList'
import { Items } from '@components/list/_PropsType'
import { MenuForList } from '@utils/api/request-response-types/client/models/Menu'

const MenuList = <T extends Record<string, any>>({ item }: Items<T>) => {
  return item?.map((v: MenuForList, i: number) => (
    <LongCardList
      key={i}
      menuId={v.id}
      name={v.name}
      price={v.price}
      duration={v.duration}
      img
      imgPath='/img/menu.jpeg'
      imgClasses='w-28 h-28'
      description='description'
      pageType='MENU_LIST'
      buttonText='このメニューで予約'
    />
  ))
}

export default MenuList
