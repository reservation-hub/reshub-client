import React, { useState } from 'react'
import { PATHS } from '@constants/paths'
import history from '@utils/routers/history'
import SearchBox, { ISearchBarProps } from '@/components/common/SearchBox'
import Button from '@/components/common/Button'
import { GiHamburgerMenu } from 'react-icons/gi'

const ListSearchBox = ({ control }: ISearchBarProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <div className='lg:hidden grid justify-end p-5'>
        <Button
          onClick={() => setOpen(!open)}
          classes='border-none flex justify-end'
        >
          <GiHamburgerMenu className='w-[3rem] h-[3rem] text-gray-main' />
        </Button>
        {open && <SearchBox control={control} />}
      </div>

      <div className='h-auto lg:fixed right-0 left-[60rem] lg:flex hidden justify-center'>
        <div className='lg:w-[40rem] lg:mt-14 mb-5'>
          <SearchBox
            control={control}
            buttonClass='w-full'
            searchFromArea={() => history.push(`${PATHS.SHOPS}/area`)}
            searchFromTags={() => history.push(`${PATHS.SHOPS}/tags`)}
            searchFromDays={() => history.push(`${PATHS.SHOPS}/days`)}
          />
          <footer className='text-gray-main mt-5'>
            <span>Copyright© 2021 Reshub All rights reserved</span>
          </footer>
        </div>
      </div>
    </>
  )
}

export default ListSearchBox
