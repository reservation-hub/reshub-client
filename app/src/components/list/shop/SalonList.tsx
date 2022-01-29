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
    <>
      {loading && <CardLoading />}
      {rowItems?.map((item, i) =>
        loading ? (
          <CardLoading key={item.id} />
        ) : (
          <ShopItem key={i} item={item} />
        )
      )}
    </>
  )
}
export default SalonList
