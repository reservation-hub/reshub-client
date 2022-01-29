import React from 'react'
import Button from '@components/common/Button'
import { AiOutlineCalendar, AiOutlineSearch } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { BiCrown } from 'react-icons/bi'
import Input from '@components/common/Input'
import IconButton from '@components/common/IconButton'
import { Control } from 'react-hook-form'
import { ClassesAndChildren } from '../_PropsTypes'

export interface ISearchBarProps extends ClassesAndChildren {
  search?: () => void
  searchFromArea?: () => void
  searchFromStation?: () => void
  searchFromRanking?: () => void
  searchFromDays?: () => void
  control?: Control<any>
  buttonClass?: string
}
//md:w-[45rem] w-full lg:h-[28.5rem] h-[26rem]
const SearchBox = ({
  search,
  searchFromArea,
  searchFromRanking,
  searchFromDays,
  control,
  classes,
  buttonClass
}: ISearchBarProps) => {
  // searchBox div
  const searchBox = `${classes} lg:text-[1.6rem] text-[1.3rem] border bg-secondary-light mt-3 shadow-lg lg:p-8 p-4 rounded-lg text-gray-main`
  // searchBox svg icons
  const buttonIcons =
    'text-primary lg:w-[2.4rem] w-[2rem] lg:h-[2.4rem] h-[2rem] lg:mr-2 mr-1'
  const hoverButton = 'border border-primary rounded'

  // searchBox Input box
  const searchInputBox =
    'border border-primary w-full h-[4.3rem] mx-auto flex rounded'

  return (
    <div className={searchBox}>
      <span className='md:text-[2rem] text-[1.8rem] flex items-start my-5'>
        条件からサロンを探す
      </span>
      <div className='text-gray-main'>
        <ul className='flex flex-wrap	justify-between my-4'>
          <li className={buttonClass ? `${buttonClass} mb-5` : 'mb-5'}>
            <IconButton
              icon
              onClick={searchFromArea}
              text='エリアから探す'
              classes={hoverButton}
            >
              <IoLocationOutline className={buttonIcons} />
            </IconButton>
          </li>
          <li className={buttonClass ? `${buttonClass} mb-5` : 'mb-5'}>
            <IconButton
              icon
              onClick={searchFromRanking}
              text='ランキングから探す'
              classes={hoverButton}
            >
              <BiCrown className={buttonIcons} />
            </IconButton>
          </li>
          <li className={buttonClass ? `${buttonClass} mb-5` : 'mb-5'}>
            <IconButton
              icon
              onClick={searchFromDays}
              text='日付から探す'
              classes={hoverButton}
            >
              <AiOutlineCalendar className={buttonIcons} />
            </IconButton>
          </li>
        </ul>
      </div>
      <form className={searchInputBox}>
        <Input
          name='keyword'
          placeholder='サロン名・エリアなど'
          autoComplete='off'
          classes='w-full h-[4.3rem]'
          inputClasses='border-none h-[4.1rem]'
          control={control}
        />
        <Button onClick={search} classes='border-none w-[5.9rem] h-[4.1rem]'>
          <AiOutlineSearch className='w-full h-full bg-primary text-secondary-light' />
        </Button>
      </form>
    </div>
  )
}

export default SearchBox
