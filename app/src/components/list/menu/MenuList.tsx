import React from 'react'
import CardTemplate from '@/components/Template/CardTemplate'
import Button from '@components/common/Button'
import { MenuForList } from '@utils/api/request-response-types/client/models/Menu'
import { ListProps } from '@components/list/_PropsType'

const MenuList = <T extends Record<string, any>>({ item }: ListProps<T>) => {
  return (
    <div className='px-5 pb-1'>
      {item?.map((v: MenuForList, i: number) => (
        <CardTemplate
          key={i}
          shadow
          classes='flex justify-between border p-5 my-5 rounded-lg'
        >
          <div key={i} className='flex'>
            <img src='/img/menu.jpeg' alt='' className='w-28 h-28' />

            <div className='grid pl-5'>
              <span>{v.name}</span>
              <span>MENU DESCRIPTION</span>
            </div>
          </div>

          <div className='flex'>
            <div className='text-[2rem]'>
              <span>¥{v.price.toLocaleString()}</span>
            </div>
            <div className='ml-5'>
              <Button classes='w-[15rem] h-[3.5rem] rounded-lg bg-primary text-secondary-light'>
                このメニューで予約
              </Button>
            </div>
          </div>
        </CardTemplate>
      ))}
    </div>
  )
}

export default MenuList
