import Button from '@/components/common/Button'
import React from 'react'
import { IShopDetailProps } from './ShopDetail'

const Menu = ({ menuItem, sectionType }: IShopDetailProps) => {
  const activeClassName =
    menuItem?.find((v) => v.label === 'サロン情報')?.label &&
    sectionType === 'INDEX'
      ? 'bg-secondary-main text-black'
      : ''
  console.log(activeClassName)
  return (
    <div className='w-full h-24 mt-2 flex items-center'>
      <ul className='flex justify-between items-center w-full px-1'>
        {menuItem?.map((value, i) => (
          <li
            className={
              sectionType === value.slug
                ? 'bg-secondary-light h-[5rem] rounded-t-lg text-primary-dark p-5 mt-4 w-[25%] text-center'
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
