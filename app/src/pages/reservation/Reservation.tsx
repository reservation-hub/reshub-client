import React, { useCallback, useState } from 'react'
import MainTemplate from '@components/Template/MainTemplate'
import { RouteComponentProps } from 'react-router-dom'
import StepProgressBar from 'react-step-progress'
import { ProgressStep } from 'react-step-progress/dist/models'
import { SubmitHandler, useForm } from 'react-hook-form'
import '@styles/progress.css'
import StepOne from './stepPage/StepOne'
import {
  reservationSchema,
  ReservationSchema
} from '@components/reservation/reservationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import StepTwo from './stepPage/StepTwo'
import ReservationHeader from '@components/reservation/ReservationHeader'
import Footer from '@components/Template/Footer'
import { useDispatch } from 'react-redux'
import { createReservation } from '@/store/actions/reservationAction'
import StepThree from './stepPage/StepThree'
import {
  SelectedMenuValue,
  SelectedStylistValue
} from '@/components/reservation/_PropsTypes'
import Cookies from 'js-cookie'

type ShopIdParams = {
  shopId: string
}

type ReservationState = {
  shopName?: string
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

  const dispatch = useDispatch()

  const [selectedMenu, setSelectedMenu] = useState<SelectedMenuValue>({
    menuName: '',
    menuPrice: null,
    menuDuration: null
  })

  const [selectedStylist, setSelectedStylist] = useState<SelectedStylistValue>({
    stylistId: null,
    stylistName: ''
  })

  Cookies.set('selectedMenu', selectedMenu)
  Cookies.set('selectedStylist', selectedStylist)

  const { control, watch, handleSubmit } = useForm<ReservationSchema>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      menuId: menuId || '',
      stylistId: stylistId || '',
      shopId: shopId,
      reservationDate: ''
    }
  })

  const onSubmit: SubmitHandler<ReservationSchema> = useCallback((value) => {
    dispatch(
      createReservation({
        shopId: Number(shopId),
        params: {
          ...value,
          menuId: Number(value.menuId),
          stylistId: Number(value.stylistId)
        }
      })
    )
  }, [])

  const step1Validator = () => {
    if (watch('menuId') === '' || Boolean(!watch('menuId'))) return false
    return true
  }

  const step2Validator = () => {
    if (watch('reservationDate') === '') return false
    return true
  }

  const steps: ProgressStep[] = [
    {
      label: 'メニュー選択',
      name: 'step 1',
      content: (
        <StepOne shopId={shopId} control={control} setState={setSelectedMenu} />
      ),
      validator: step1Validator
    },
    {
      label: 'スタイリスト/日付選択',
      name: 'step 2',
      content: (
        <StepTwo
          shopId={shopId}
          control={control}
          setState={setSelectedStylist}
        />
      ),
      validator: step2Validator
    },
    {
      label: '予約内容確認',
      name: 'step 3',
      content: <StepThree reservationDate={String(watch('reservationDate'))} shopName={location.state?.shopName} />
    }
  ]

  return (
    <>
      <MainTemplate>
        <div className='w-full'>
          <ReservationHeader text={`${location.state?.shopName}`} />
          <StepProgressBar
            steps={steps}
            startingStep={0}
            onSubmit={handleSubmit(onSubmit)}
            nextBtnName='次へ'
            previousBtnName='戻る'
            wrapperClass='mt-4'
            progressClass='w-[100rem]'
            labelClass='text-[1.4rem] w-[20rem]'
            contentClass='mt-14'
            primaryBtnClass='w-[20rem] text-center bg-primary text-secondary-light border-none'
            secondaryBtnClass='w-[20rem] text-center'
            submitBtnName='予約確定'
          />
        </div>
      </MainTemplate>
      <Footer classes='mt-36' />
    </>
  )
}

export default Reservation
