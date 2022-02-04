import React from 'react'
import { DetailMenuItem, SECTION_TYPE } from '@constants/detail'
import { SalonResponse } from '@utils/api/request-response-types/client/Shop'
import StylistList from '@components/list/stylist/StylistList'
import { IListProps } from '@components/list/_PropsType'
import MenuList from '@components/list/menu/MenuList'
import DataTable from '@components/common/DataTable'
import { loadavg } from 'os'

export interface IShopDetailProps extends IListProps {
  menuItem?: DetailMenuItem[]
  sectionType?: keyof typeof SECTION_TYPE
}

const ShopDetail = ({ item, menuItem, loading }: IShopDetailProps) => {
  type SalonDetail = SalonResponse & {
    businessTime: string
    seats: string
  }

  const detailItem = {
    ...item,
    days: item?.days?.join(' ・ '),
    tags: item?.tags?.flatMap((v: any) => v?.slug).join(' . '),
    address: `${item?.prefectureName}${item?.cityName}${item?.address || ''}`,
    businessTime: `${item?.startTime} - ${item?.endTime}`,
    seats: `${item?.seats}席`
  } as SalonDetail

  return (
    <div className='mt-10 text-primary-dark'>
      <div className='w-full'>DESCRIPTION</div>

      <div className='my-10'>
        <StylistList
          item={detailItem?.stylists}
          gotoSection={
            menuItem?.find((v) => v.slug === SECTION_TYPE.STYLIST)?.click
          }
          loading={loading}
          inDetailPage
          boxText='所属スタイリスト'
        />
      </div>

      <div className='my-10'>
        <MenuList
          item={detailItem?.menus}
          gotoSection={
            menuItem?.find((v) => v.slug === SECTION_TYPE.MENU)?.click
          }
          inDetailPage
          boxText='当店のメニュー'
        />
      </div>

      <div className='my-10'>
        <DataTable
          cell={[
            { column: '店舗名', key: 'name' },
            { column: '住所', key: 'address' },
            { column: '営業日', key: 'days' },
            { column: '営業時間', key: 'businessTime' },
            { column: '店舗タグ', key: 'tags' },
            { column: '座席数', key: 'seats' }
          ]}
          item={detailItem}
          classes='bg-gray-400 text-secondary-main w-[20rem]'
        />
      </div>
    </div>
  )
}

export default React.memo(ShopDetail)
