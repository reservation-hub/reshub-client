import React from 'react'
import { AiFillGithub } from 'react-icons/all'
import { ClassesAndChildren } from '../_PropsTypes'

const Footer = ({ classes }: ClassesAndChildren) => {
  return (
    <footer
      className={`${classes} w-full h-36 items-center flex bg-primary lg:p-0 p-5`}
    >
      <div className='w-[100rem] mx-auto flex justify-between'>
        <span className='lg:text-[2rem] text-secondary-main'>
          CopyrightÂ© 2021 Reshub All rights reserved
        </span>
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
      </div>
    </footer>
  )
}

export default Footer
