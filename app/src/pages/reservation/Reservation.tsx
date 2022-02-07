import React, { useEffect } from 'react'
import MainTemplate from '@/components/Template/MainTemplate'
import { RouteComponentProps } from 'react-router-dom'
import StepProgressBar from 'react-step-progress'
import { ProgressStep } from 'react-step-progress/dist/models'
import { useForm } from 'react-hook-form'
import '@styles/progress.css'
import StepOne from './stepPage/StepOne'
import {
  reservationSchema,
  ReservationSchema
} from '@/components/reservation/reservationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import StepTwo from './stepPage/StepTwo'

type ShopIdParams = {
  shopId: string
}

type ReservationState = {
  menuId?: string
  stylistId?: string
}

const Reservation = ({
  match,
  location
}: RouteComponentProps<ShopIdParams, any, ReservationState>) => {
  const { shopId } = match.params
  const menuId = location.state?.menuId
  const stylistId = location.state?.stylistId

  const { control, watch } = useForm<ReservationSchema>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      menuId: menuId || '',
      stylistId: stylistId || '',
      shopId: shopId
    }
  })

  const step3Content = <h1>Step 3 Content</h1>

  const step1Validator = () => {
    if (watch('menuId') === '' || Boolean(!watch('menuId'))) return false
    return true
  }

  const step2Validator = () => {
    if (watch('stylistId') === '') return false
    return true
  }

  const steps: ProgressStep[] = [
    {
      label: 'メニュー選択',
      name: 'step 1',
      content: <StepOne shopId={shopId} control={control} />,
      validator: step1Validator
    },
    {
      label: 'スタイリスト/日付選択',
      name: 'step 2',
      content: <StepTwo shopId={shopId} control={control} />,
      validator: step2Validator
    },
    {
      label: '予約確認',
      name: 'step 3',
      content: step3Content
    },
    {
      label: '予約完了',
      name: 'step 4',
      content: step3Content
    }
  ]

  return (
    <MainTemplate>
      <div className='w-full'>
        <div className='bg-primary text-white p-5'>test reservation</div>
        <StepProgressBar
          steps={steps}
          startingStep={0}
          onSubmit={() => console.log('test')}
          nextBtnName='次へ'
          previousBtnName='戻る'
          wrapperClass='mt-4'
          progressClass='w-[100rem]'
          labelClass='text-[1.4rem] w-[20rem]'
          contentClass='mt-14'
          primaryBtnClass='w-[20rem] text-center bg-primary text-secondary-light border-none'
          secondaryBtnClass='w-[20rem] text-center'
        />
      </div>
    </MainTemplate>
  )
}

export default Reservation
