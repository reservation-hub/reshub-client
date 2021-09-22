import React from 'react'

const Header = () => {
  return (
    <header className='h-[8rem] bg-primary flex justify-around items-center'>
      <h1 className='text-[3.2rem] text-secondary-main'>
        <a href='/'>Reshub</a>
      </h1>
      {/*todo とりあえずこのナビバーは仮なのでラウター指定次第作成*/}
      <div className='flex'>
        <a href='./' className='text-[1.6rem] text-secondary-main'>
          美容室
        </a>
        <div className='border border-secondary-main mx-5' />
        <a href='./' className='text-[1.6rem] text-secondary-main'>
          カタログ
        </a>
        <div className='border border-secondary-main mx-5' />
        <a href='./' className='text-[1.6rem] text-secondary-main'>
          予約履歴
        </a>
        <div className='border border-secondary-main mx-5' />
        <a href='./' className='text-[1.6rem] text-secondary-main'>
          ログイン
        </a>
      </div>
    </header>
  )
}

export default Header
