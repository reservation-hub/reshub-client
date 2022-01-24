import React from 'react'
import NavMenu from '@components/common/NavMenu'
import LinkTitle from '@components/common/LinkTitle'

const Header = () => {
  return (
    <header className='h-[8rem] bg-primary'>
      <div className='w-[100rem] h-full flex mx-auto justify-between items-center'>
        <LinkTitle title='Reshub' url='/' classes='text-secondary-main' />
        {/*todo とりあえずこのナビバーは仮なのでラウター指定次第作成*/}
        <NavMenu />
      </div>
    </header>
  )
}

export default Header
