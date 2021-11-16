import React from 'react'
import { AiFillGithub } from 'react-icons/all'
import { ClassesAndChildren } from '@components/_PropsTypes'

const Footer = ({ classes }: ClassesAndChildren) => {
  return (
    <footer
      className='w-full h-[9rem] bottom-0 flex justify-around items-center bg-primary'
    >
      <h1 className='text-[2rem] text-secondary-main'>
        Copyright© 2021 Reshub All rights reserved
      </h1>
      <div className='flex'>
        <a href='https://github.com/reservation-hub'>
          <AiFillGithub className='w-[2.8rem] h-[2.8rem] mr-2 text-secondary-main' />
        </a>
        <a href='https://github.com/reservation-hub'>
          <AiFillGithub className='w-[2.8rem] h-[2.8rem] mr-2 text-secondary-main' />
        </a>
        <a href='https://github.com/reservation-hub'>
          <AiFillGithub className='w-[2.8rem] h-[2.8rem] mr-2 text-secondary-main' />
        </a>
        <a href='https://github.com/reservation-hub'>
          <AiFillGithub className='w-[2.8rem] h-[2.8rem] text-secondary-main' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
