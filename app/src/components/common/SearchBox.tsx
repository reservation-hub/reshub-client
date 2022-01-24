import React from 'react'
import Button from '@components/common/Button'
import { AiOutlineCalendar, AiOutlineSearch } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { BiTrain, BiCrown } from 'react-icons/bi'
import Input from '@components/common/Input'
import IconButton from '@components/common/IconButton'

export interface ISearchBarProps {
  search?: () => void
  searchFromArea?: () => void
  searchFromStation?: () => void
  searchFromRanking?: () => void
  searchFromDays?: () => void
  control?: any
}

const SearchBox = ({
  search,
  searchFromArea,
  searchFromStation,
  searchFromRanking,
  searchFromDays,
  control
}: ISearchBarProps) => {
  // searchBox div
  const searchBox =
    'w-[45rem] h-[28.5rem] border bg-secondary-light grid mt-3 shadow-lg'

  // searchBox svg icons
  const buttonIcons = 'text-primary w-[2.4rem] h-[2.4rem] mr-2'

  // searchBox Input box
  const searchInputBox =
    'border border-secondary-black w-[41rem] h-[4.5rem] mx-auto flex'

  return (
    <div className={searchBox}>
      <div className='my-auto w-[25.9rem]'>
        <span className='text-[2rem]'>条件からサロンを探す</span>
      </div>
      <div className='m-auto text-secondary-dark '>
        <IconButton icon onClick={searchFromArea} text='エリアから探す'>
          <IoLocationOutline className={buttonIcons} />
        </IconButton>
        <IconButton icon onClick={searchFromStation} text='駅から探す'>
          <BiTrain className={buttonIcons} />
        </IconButton>
        <IconButton icon onClick={searchFromRanking} text='ランキングから探す'>
          <BiCrown className={buttonIcons} />
        </IconButton>
        <IconButton icon onClick={searchFromDays} text='日付から探す'>
          <AiOutlineCalendar className={buttonIcons} />
        </IconButton>
      </div>
      <div className={searchInputBox}>
        <Input
          name=''
          placeholder='サロン名・エリアなど'
          classes='w-[35rem] h-[4.3rem]'
          control={control}
        />
        <Button onClick={search} classes='border-none w-[5.9rem] h-[4.3rem]'>
          <AiOutlineSearch className='w-full h-full bg-primary text-secondary-light' />
        </Button>
      </div>
    </div>
  )
}

export default SearchBox
