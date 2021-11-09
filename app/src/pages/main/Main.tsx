import React from 'react'
import MainTemplate from '@components/Template/MainTemplate'
import '@styles/global.css'
import SearchBox from '@components/common/SearchBox'
import Box from '@components/Template/Box'

const Main = () => {
  return (
    <MainTemplate>
      <div className='w-full h-[30rem] mt-20 text-center bg-primary flex justify-center'>
        <div className='grid text-secondary-light mr-[14rem]'>
          <span className='text-[3.8rem] mt-28'>
            あなたにぴったりな <br /> サロンを見つけ方
          </span>
        </div>
        <SearchBox />
      </div>

      <div className='w-[100rem] h-full mx-auto mt-20 flex text-[1.6rem] justify-between'>
        <div className='w-[60rem] h-full'>
          <Box boxClass='h-[19.7rem]' title='ランキング'></Box>
          <Box boxClass='h-[85.5rem] mt-16' title='店舗'></Box>
        </div>
        <div className='w-[38.5rem]'>
          <Box boxClass='h-[55rem]' title='キャンペーン'></Box>
          <Box boxClass='h-[50.2rem] mt-16' title='運営からのお知らせ'></Box>
        </div>
      </div>
    </MainTemplate>
  )
}

export default Main
