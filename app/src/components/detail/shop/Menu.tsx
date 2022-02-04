import React from 'react'
import Button from '@components/common/Button'
import { IShopDetailProps } from './ShopDetail'

const Menu = <T extends any>({
  menuItem,
  sectionType
}: IShopDetailProps<T>) => {
  return (
    <div className='w-full h-24 mt-2 flex items-center'>
      <ul className='flex justify-between items-center w-full px-1'>
        {menuItem?.map((value, i) => (
          <li
            className={
              sectionType === value.slug
                ? 'bg-secondary-light h-[5rem] rounded-t-lg text-gray-main p-5 mt-4 w-[25%] text-center'
                : 'p-5 mt-4 w-[25%] text-center'
            }
            key={i}
          >
            <Button onClick={value.click} classes='border-none'>
              {value.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
