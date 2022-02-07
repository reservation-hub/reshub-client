import React from 'react'
import { DetailMenuItem, SECTION_TYPE } from '@constants/detail'
import { SalonResponse } from '@utils/api/request-response-types/client/Shop'
import { Items } from '@components/list/_PropsType'
import DataTable from '@components/common/DataTable'
import Box from '@components/Template/Box'
import CardList from '@/components/list/CardList'
import CardLoading from '@/components/list/CardLoading'

export interface ShopDetailProps<T> extends Items<T> {
  menuItem?: DetailMenuItem[]
  sectionType?: keyof typeof SECTION_TYPE
}

const ShopDetail = <T extends SalonResponse>({
  item,
  menuItem,
  loading
}: ShopDetailProps<T>) => {
  type SalonDetail = SalonResponse & {
    businessTime: string
    seats: string
  }

  const showAllButton =
    'flex justify-end p-5 border-none text-gray-main cursor-pointer text-[1.4rem]'

  const detailItem = {
    ...item,
    days: item?.days?.join(' ・ '),
    tags: item?.tags?.flatMap((v: any) => v?.slug).join(' . '),
    address: `${item?.prefectureName}${item?.cityName}${item?.address || ''}`,
    businessTime: `${item?.startTime} - ${item?.endTime}`,
    seats: `${item?.seats}席`
  } as unknown as SalonDetail

  return (
    <div className='mt-10 text-primary-dark'>
      <div className='w-full'>DESCRIPTION</div>

      <div className='my-10'>
        <Box title={`${item?.name}のスタイリスト`}>
          <div className='flex flex-wrap justify-between px-5 pb-5 text-[1.4rem]'>
            {loading ? (
              <CardLoading count={5} price />
            ) : (
              <>
                {item?.stylists?.map((v, i) => (
                  <CardList
                    key={i}
                    icon
                    name={v.name}
                    price={v.price}
                    buttonText='指名して予約'
                  />
                ))}
              </>
            )}
          </div>

          <div
            className={showAllButton}
            onClick={
              menuItem?.find((v) => v.slug === SECTION_TYPE.STYLIST)?.click
            }
          >
            全てのスタイリストを見る
          </div>
        </Box>
      </div>

      <div className='my-10'>
        <Box title={`${item?.name}のおすすめメニュー`}>
          <div
            className={showAllButton}
            onClick={menuItem?.find((v) => v.slug === SECTION_TYPE.MENU)?.click}
          >
            全てのメニューを見る
          </div>
        </Box>
        {/* <MenuList
          item={detailItem?.menus}
          gotoSection={
            menuItem?.find((v) => v.slug === SECTION_TYPE.MENU)?.click
          }
          inDetailPage
          boxText='当店のメニュー'
        /> */}
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
