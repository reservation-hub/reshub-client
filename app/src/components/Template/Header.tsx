import React from 'react'
import NavMenu from '@components/common/NavMenu'

const Header = () => {
  return (
    <header className='h-[8rem] bg-primary'>
      <div className='w-[100rem] h-full flex mx-auto justify-between items-center'>
        <h1 className='text-[3.2rem] text-secondary-main'>
          <a href='/'>Reshub</a>
        </h1>
        {/*todo とりあえずこのナビバーは仮なのでラウター指定次第作成*/}
        <NavMenu />
      </div>
    </header>
  )
}

export default Header
