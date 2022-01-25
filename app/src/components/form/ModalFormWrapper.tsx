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
    <div className='w-full h-full text-gray-main flex'>
      <div className='h-full bg-primary flex items-center p-10'>
        <span className='text-[2.1rem] text-secondary-light w-[18rem]'>
          {pageType === 'login' ? 'Reshubへログイン' : 'Reshubへ会員登録'}
        </span>
      </div>
      <div className='w-full h-full p-10 grid items-center'>
        <div className='flex justify-end'>
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
