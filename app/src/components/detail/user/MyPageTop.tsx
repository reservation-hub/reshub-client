import React from 'react'
import Box from '@/components/Template/Box'
import { IListProps, Items } from '@/components/list/_PropsType'
import DataTable from '@/components/common/DataTable'
import { MypageSubItems, UserDetail } from '@/pages/user/MyPage'
import Card from '@/components/Template/Card'
import ReservationItem from '@/components/list/reservation/ReservationItem'
import SubTitle from '@/components/common/SubTitle'

export interface IMypageTopProps<T> extends Items<T> {
  subItems?: MypageSubItems
}

const MypageTop = <T extends UserDetail>({
  item,
  subItems
}: IMypageTopProps<T>) => {
  return (
    <div className='mt-5 w-[69%]'>
      <Box title='会員情報' boxClass='mb-4'>
        <DataTable
          cell={[
            { column: 'メールアドレス', key: 'email' },
            { column: 'お名前（カナ）', key: 'kanaName' },
            { column: '性別', key: 'gender' },
            { column: '生年月日', key: 'birthday' }
          ]}
          item={item}
          classes='bg-primary text-secondary-main w-[20rem]'
        />
      </Box>
      <Box title='予約一覧' boxClass='mb-4 pb-5'>
        {subItems?.reservation.length === 0 ? (
          <div>null</div>
        ) : (
          <>
            {subItems?.reservation.map((v, i) => (
              <ReservationItem key={i} item={v} />
            ))}
            <div className='flex justify-end pr-5'>全ての予約を見る</div>
          </>
        )}
      </Box>
      <Box title='以前予約したことがあるサロン'>
        <Card classes='p-5 m-5 border rounded-lg'>
          <div className='flex'>
            <div className='flex'>
              <img
                src='/img/salon.jpeg'
                alt=''
                className='w-[6rem] h-[6rem] rounded-lg'
              />
              <SubTitle text='TEST' classes='px-5' />
            </div>
          </div>
        </Card>
        <Card classes='p-5 h-[10rem]'>test</Card>
        <Card classes='p-5 h-[10rem]'>test</Card>
      </Box>
    </div>
  )
}

export default MypageTop
