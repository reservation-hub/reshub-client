import Box from '@/components/Template/Box'
import React from 'react'

const MyPageTop = () => {
  return (
    <div className='flex mt-5'>
      <div className='w-full'>
        <Box title='予約一覧'></Box>
      </div>
      <div className='w-[30rem] h-full ml-5'>
        <div className='border rounded-lg'>
          <ul className='h-full p-2'>
            <li className='p-3'>予約履歴</li>
            <li className='p-3'>口コミ履歴</li>
            <li className='p-3'>会員情報</li>
            <li className='p-3'>パスワード変更</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyPageTop
