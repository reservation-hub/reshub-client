import React, { useState } from 'react'
import { PATHS } from '@constants/paths'
import history from '@utils/routers/history'
import SearchBox from '@components/common/SearchBox'
import Button from '@components/common/Button'
import { GiHamburgerMenu } from 'react-icons/gi'

const ListSearchBox = () => {
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
        {open && <SearchBox />}
      </div>

      <div className='h-auto lg:fixed right-0 left-[60rem] lg:flex hidden justify-center'>
        <div className='lg:w-[40rem] lg:mt-14 mb-5'>
          <SearchBox
            buttonClass='w-full'
            searchFromTags={() => history.push(`${PATHS.SHOPS}/tags`)}
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
