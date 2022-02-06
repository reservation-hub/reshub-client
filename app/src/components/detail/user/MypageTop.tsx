import React from 'react'
import Box from '@/components/Template/Box'
import { Items } from '@/components/list/_PropsType'
import DataTable from '@/components/common/DataTable'
import { MypageSubItems, UserDetail } from '@/pages/user/MyPage'
import CardTemplate from '@/components/Template/CardTemplate'
import ReservationItem from '@/components/list/reservation/ReservationItem'
import SubTitle from '@/components/common/SubTitle'
import { Link } from 'react-router-dom'
import { PATHS } from '@/constants/paths'
import EmptyData from '@/components/common/EmptyData'
import Image from '@/components/common/Image'
import Button from '@/components/common/Button'

export interface MypageTopProps<T> extends Items<T> {
  subItems?: MypageSubItems
}

const MypageTop = <T extends UserDetail>({
  item,
  subItems
}: MypageTopProps<T>) => {
  return (
    <div className='mt-5 lg:w-[69rem] w-full'>
      <Box title='会員情報' boxClass='mb-4'>
        <DataTable
          cell={[
            { column: 'メールアドレス', key: 'email' },
            { column: 'お名前（カナ）', key: 'kanaName' },
            { column: '性別', key: 'gender' },
            { column: '生年月日', key: 'birthday' }
          ]}
          item={item}
          classes='bg-primary text-secondary-main lg:w-[20rem] w-[10rem]'
        />
      </Box>
      <Box title='予約一覧' boxClass='mb-4 pb-5'>
        {subItems?.reservation.length === 0 ? (
          <EmptyData text='予約' />
        ) : (
          <>
            {subItems?.reservation.map((v, i) => (
              <ReservationItem key={i} item={v} />
            ))}
            <div className='flex justify-end pr-5 text-gray-main lg:m-0 mt-4'>
              <Link to={`${PATHS.USER}/reservations`}>全ての予約を見る</Link>
            </div>
          </>
        )}
      </Box>
      <Box title='以前予約したことがあるサロン'>
        {subItems?.visitedShop.length === 0 ? (
          <EmptyData text='履歴' />
        ) : (
          <div className='flex flex-wrap justify-between px-5 pb-5'>
            <CardTemplate classes='grid justify-center mt-5 p-5 rounded-lg border w-[17rem]'>
              <div className='grid items-center justify-center text-center'>
                <Image imagePath='img/salon.jpeg' classes='w-40 h-40 mx-auto' />
                <SubTitle text='TEST' classes='px-5' />
                <Button classes='bg-primary text-secondary-light mt-4 p-2 rounded-lg border-none text-[1.3rem]'>
                  このサロンで予約する
                </Button>
              </div>
            </CardTemplate>
            <CardTemplate classes='p-5 h-[10rem]'>test</CardTemplate>
            <CardTemplate classes='p-5 h-[10rem]'>test</CardTemplate>
          </div>
        )}
      </Box>
    </div>
  )
}

export default MypageTop
