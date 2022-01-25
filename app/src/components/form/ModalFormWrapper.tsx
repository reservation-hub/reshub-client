import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../common/Button'
import { IModalFormProps } from './_PropsType'

const ModalFormWrapper = <T extends Record<string, any>>({
  children,
  pageType,
  submitHandler,
  modalHandler,
  subModalHandler
}: IModalFormProps<T>) => {
  return (
    <div className='w-full h-full text-gray-main md:flex'>
      <div className='md:h-full bg-primary flex items-center md:justify-items-start justify-between md:p-10 p-5'>
        <span className='md:text-[2.1rem] text-secondary-light w-[18rem]'>
          {pageType === 'login' ? 'Reshubへログイン' : 'Reshubへ会員登録'}
        </span>
        <div className='md:hidden justify-end text-secondary-light'>
          <AiOutlineClose className='h-8 w-8' onClick={modalHandler} />
        </div>
      </div>
      <div className='w-full h-full md:p-10 p-5 md:grid items-center'>
        <div className='md:flex hidden justify-end'>
          <AiOutlineClose className='h-8 w-8' onClick={modalHandler} />
        </div>
        <form onSubmit={submitHandler} className='mb-5'>
          {children}
        </form>
        <div className='text-right mt-14'>
          <span className='text-primary-dark'>
            {pageType === 'login'
              ? 'Reshubが初めての方は'
              : '既にご登録されている方は'}
            <Button
              onClick={subModalHandler}
              classes='ml-2 text-primary border-none'
            >
              {pageType === 'login' ? '会員登録' : 'ログイン'}
            </Button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ModalFormWrapper
