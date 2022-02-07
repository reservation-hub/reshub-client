import React, { FormEventHandler } from 'react'
import Button from '@components/common/Button'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { BiCrown } from 'react-icons/bi'
import Input from '@components/common/Input'
import IconButton from '@components/common/IconButton'
import { Control } from 'react-hook-form'
import { ClassesAndChildren } from '../_PropsTypes'

export interface SearchBarProps extends ClassesAndChildren {
  search?: FormEventHandler<HTMLFormElement>
  searchFromArea?: () => void
  searchFromTags?: () => void
  control?: Control<any>
  buttonClass?: string
}

const SearchBox = ({
  search,
  searchFromArea,
  searchFromTags,
  control,
  classes,
  buttonClass
}: SearchBarProps) => {
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
              onClick={searchFromTags}
              text='タグから探す'
              classes={hoverButton}
            >
              <BiCrown className={buttonIcons} />
            </IconButton>
          </li>
        </ul>
      </div>
      <form className={searchInputBox} onSubmit={search}>
        <Input
          name='keyword'
          placeholder='サロン名'
          autoComplete='off'
          classes='w-full h-[4.3rem]'
          inputClasses='border-none h-[4.1rem]'
          control={control}
        />
        <Button classes='border-none w-[5.9rem] h-[4.1rem]'>
          <AiOutlineSearch className='w-full h-full bg-primary text-secondary-light' />
        </Button>
      </form>
    </div>
  )
}

export default SearchBox
