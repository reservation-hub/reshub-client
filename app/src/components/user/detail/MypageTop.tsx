import React from 'react'
import Box from '@components/Template/Box'
import { Items } from '@components/list/_PropsType'
import DataTable from '@components/common/DataTable'
import { MypageSubItems, UserDetail } from '@pages/user/MyPage'
import { Link } from 'react-router-dom'
import { PATHS } from '@constants/paths'
import EmptyData from '@components/common/EmptyData'
import CardList from '@components/list/CardList'
import LongCardList from '@components/list/LongCardList'
import useConvertTime from '@utils/hooks/useConvertTime'

export interface MypageTopProps<T> extends Items<T> {
  subItems?: MypageSubItems
}

const MypageTop = <T extends UserDetail>({
  item,
  subItems
}: MypageTopProps<T>) => {
  return (
    <div className='lg:w-[69rem] w-full'>
      <span className='text-gray-main'>こんにちは{item?.username}さん</span>
      <Box title='会員情報' boxClass='my-4'>
        <DataTable
          cell={[
            { column: 'メールアドレス', key: 'email' },
            { column: 'ユーザー名', key: 'username' },
            { column: 'お名前（カナ）', key: 'kanaName' },
            { column: '性別', key: 'gender' },
            { column: '生年月日', key: 'birthday' }
          ]}
          item={item}
          classes='bg-primary text-secondary-main lg:w-[20rem] w-[10rem]'
        />
      </Box>
      <Box title='予約一覧' boxClass='mb-4 pb-5'>
        {subItems?.reservation?.length === 0 ? (
          <EmptyData text='予約' />
        ) : (
          <>
            {subItems?.reservation?.map((v, i) => (
              <LongCardList
                key={i}
                name={v.shopName}
                headerSectionText={`予約日: ${useConvertTime(
                  'ymdhm',
                  v.reservationDate
                )}`}
                menuName={v.menuName}
                stylistName={v.stylistName}
                reservationId={v.id}
                reservationStatus={v.status}
                link='#'
                pageType='RESERVATION_LIST'
              />
            ))}
            <div className='flex justify-end pr-5 text-gray-main lg:m-0 mt-4'>
              <Link to={`${PATHS.USER}/reservations`}>全ての予約を見る</Link>
            </div>
          </>
        )}
      </Box>
      <Box title='以前予約したことがあるサロン'>
        {subItems?.visitedShop?.length === 0 ? (
          <EmptyData text='履歴' />
        ) : (
          <div className='flex flex-wrap justify-between px-5 pb-5 text-[1.4rem]'>
            {subItems?.visitedShop?.map((v, i) => (
              <CardList key={i} img='img/salon.jpeg' name={v.shopName} />
            ))}
          </div>
        )}
      </Box>
    </div>
  )
}

export default MypageTop
