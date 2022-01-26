import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import { ShopForList } from '@utils/api/request-response-types/models/Shop'
import ShopItem from '@components/list/shop/ShopItem'
import CardLoading from './CardLoading'

const SalonList = ({ item, loading }: IListProps) => {
  const rowItems: ShopForList[] = item?.map((shop: ShopForList) => ({
    ...shop,
    address: `${shop.prefectureName}${shop.cityName}${shop.address || ''}`
  }))

  return (
    <div>
      {rowItems?.map((item, i) => (
        <>{loading ? <CardLoading /> : <ShopItem key={i} item={item} />}</>
      ))}
    </div>
  )
}
export default SalonList
