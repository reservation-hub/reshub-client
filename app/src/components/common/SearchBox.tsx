import React from 'react'
import Button from '@components/common/Button'
import { AiOutlineCalendar, AiOutlineSearch } from 'react-icons/ai'
import { ISearchBarProps } from '@components/common/_PropsType'
import { IoLocationOutline } from 'react-icons/io5'
import { BiTrain, BiCrown } from 'react-icons/bi'
import Input from './Input'

const SearchBox = ({
  search,
  searchFromArea,
  searchFromStation,
  searchFromRanking,
  searchFromDays
}: ISearchBarProps) => {
  return (
    <div className='w-[45rem] h-[28.5rem] border bg-secondary-light grid mt-3 shadow-lg'>
      <div className='my-auto w-[25.9rem]'>
        <span className='text-[2rem]'>条件からサロンを探す</span>
      </div>
      <div className='m-auto text-secondary-dark '>
        <Button
          onClick={searchFromArea}
          classes='w-[20rem] h-[4.5rem] text-[1.6rem] m-2'
        >
          <span className='flex p-3'>
            <IoLocationOutline className='text-primary w-[2.4rem] h-[2.4rem] mr-2' />
            エリアから探す
          </span>
        </Button>
        <Button
          onClick={searchFromStation}
          classes='w-[20rem] h-[4.5rem] text-[1.6rem] m-2'
        >
          <span className='flex p-3'>
            <BiTrain className='text-primary w-[2.4rem] h-[2.4rem] mr-2' />
            駅から探す
          </span>
        </Button>
        <Button
          onClick={searchFromRanking}
          classes='w-[20rem] h-[4.5rem] text-[1.6rem] m-2'
        >
          <span className='flex p-3'>
            <BiCrown className='w-[2.4rem] h-[2.4rem] mr-2 text-primary' />
            ランキングから探す
          </span>
        </Button>
        <Button
          onClick={searchFromDays}
          classes='w-[20rem] h-[4.5rem] text-[1.6rem] m-2'
        >
          <span className='flex p-3'>
            <AiOutlineCalendar className='w-[2.4rem] h-[2.4rem] text-primary mr-2' />
            日付から探す
          </span>
        </Button>
      </div>
      <div className='border border-secondary-black w-[41rem] h-[4.5rem] mx-auto flex'>
        <Input
          placebolder='サロン名・エリアなど'
          classes='w-[35rem] h-[4.3rem]'
        />
        <Button onClick={search} classes='border-none w-[5.9rem] h-[4.3rem]'>
          <AiOutlineSearch className='w-full h-full bg-primary text-secondary-light' />
        </Button>
      </div>
    </div>
  )
}

export default SearchBox
