import Button from '@/components/common/Button'
import Box from '@/components/Template/Box'
import { MenuForList } from '@/utils/api/request-response-types/client/models/Menu'
import React from 'react'
import { IInDetailListProps } from '../_PropsType'

const MenuList = ({
  item,
  boxText,
  inDetailPage,
  gotoSection
}: IInDetailListProps) => {
  const showAllButton =
    'flex justify-end p-5 border-none text-gray-main cursor-pointer text-[1.4rem]'

  return (
    <Box title={boxText}>
      <div className='px-5 pb-1'>
        {item?.map((v: MenuForList, i: number) => (
          <div key={i} className='flex justify-between border p-5 my-5'>
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
          </div>
        ))}
      </div>
      {inDetailPage && (
        <div className={showAllButton} onClick={gotoSection}>
          全てのメニューを見る
        </div>
      )}
    </Box>
  )
}

export default MenuList
