import React from 'react'
import Button from '../common/Button'
import { ModalProps } from './_PropsType'

export interface ModalAlertProps extends ModalProps {
  submitHandler?: () => void
  buttonText?: string
}

const ModalAlert = ({
  children,
  buttonText,
  onClose,
  submitHandler
}: ModalAlertProps) => {
  return (
    <div className='bg-secondary-main p-10 text-primary-dark rounded-lg lg:w-full w-[35rem]'>
      <span>{children}</span>
      <div className='flex justify-between mt-10'>
        <Button
          classes='bg-error-main py-2 px-5 rounded-lg text-secondary-light lg:w-[19rem] w-[14rem]'
          onClick={submitHandler}
        >
          {buttonText}
        </Button>
        <Button
          classes='py-2 px-5 rounded-lg lg:w-[19rem] w-[14rem]'
          onClick={onClose}
        >
          戻る
        </Button>
      </div>
    </div>
  )
}

export default ModalAlert
