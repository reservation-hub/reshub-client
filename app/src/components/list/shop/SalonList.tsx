import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import IsEmpty from '@components/common/atoms/IsEmpty'
import Table from '@components/common/atoms/Table'
import { ShopForList } from '@utils/api/request-response-types/models/Shop'
import ShopItem from '@components/list/shop/ShopItem'
const SalonList = ({ item }: IListProps) => {
  const rowItems: ShopForList[] = item?.map((shop: ShopForList) => ({
    ...shop,
    address: `${shop.prefectureName}${shop.cityName}${shop.address || ''}`
  }))

  return (
    <>
      {rowItems.map((item, i) => (
        <ShopItem key={i} shop={item} />
      ))}
    </>
  )
}
export default SalonList
