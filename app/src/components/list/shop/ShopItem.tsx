import React from 'react'
import { ShopForList } from '@/utils/api/request-response-types/client/models/Shop'

interface IItemProps<T> {
  shop: ShopForList
}

const ShopItem = <T extends Record<string, any>>({
  shop
}: IItemProps<T>): React.ReactElement => {
  return (
    <section className='flex flex-wrap pb-4'>
      <div className='w-full  m-4 mb-0'>
        <header className='bg-white p-4 shadow-md flex justify-between'>
          <span>{shop.name}</span>
          {'rating and reviews'}
        </header>
        <body className='bg-white p-4 shadow'>
          <div className='block'>
            <p>address: {shop.address}</p>
            <p>phone number: {shop.phoneNumber}</p>
          </div>
        </body>
      </div>
    </section>
  )
}

export default ShopItem
