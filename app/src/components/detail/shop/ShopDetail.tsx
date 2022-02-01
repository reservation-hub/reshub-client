import React from 'react'
import { DetailMenuItem, SECTION_TYPE } from '@/constants/detail'
import Header from './Header'
import Menu from './Menu'
import Box from '@/components/Template/Box'
import { StylistForList } from '@/utils/api/request-response-types/client/models/Stylist'
import { BiUserCircle } from 'react-icons/bi'

export interface IShopDetailProps {
  item?: Record<string, any>
  menuItem?: DetailMenuItem[]
  sectionType?: keyof typeof SECTION_TYPE
}

const ShopDetail = ({ item, menuItem, sectionType }: IShopDetailProps) => {
  console.log(sectionType)
  return (
    <>
      <div className='w-full bg-primary rounded-tl-lg rounded-tr-lg text-secondary-main'>
        <Header item={item} />

        <Menu menuItem={menuItem} sectionType={sectionType} />
      </div>

      <div className='mt-10'>
        <div className='w-full'>DESCRIPTION</div>

        <div className='my-10'>
          <Box title='所属スタイリスト'>
            <div className='flex justify-between p-5'>
              {item?.stylists?.map((v: StylistForList, i: number) => (
                <div key={i} className='grid justify-center'>
                  <BiUserCircle className='mx-auto w-[10rem] h-[10rem]' />
                  <span>{v.name}</span>
                </div>
              ))}
            </div>
          </Box>
        </div>
      </div>
    </>
  )
}

export default ShopDetail
