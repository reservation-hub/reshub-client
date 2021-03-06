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
import { createReservation } from '@store/actions/reservationAction'
import StepThree from './stepPage/StepThree'

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
  const [pageType, setPageType] = useState<'step' | 'complete'>('step')

  const dispatch = useDispatch()

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
    setPageType('complete')
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
      label: '??????????????????',
      name: 'step 1',
      content: <StepOne shopId={shopId} control={control} />,
      validator: step1Validator
    },
    {
      label: '??????????????????/????????????',
      name: 'step 2',
      content: <StepTwo shopId={shopId} control={control} />,
      validator: step2Validator
    },
    {
      label: '??????????????????',
      name: 'step 3',
      content: (
        <StepThree shopName={location.state?.shopName} pageType={pageType} />
      )
    }
  ]

  return (
    <>
      <MainTemplate>
        <div className='w-full'>
          <ReservationHeader text={`${location.state?.shopName}`} />
          {pageType === 'step' ? (
            <StepProgressBar
              steps={steps}
              startingStep={0}
              onSubmit={handleSubmit(onSubmit)}
              nextBtnName='??????'
              previousBtnName='??????'
              wrapperClass='mt-4'
              progressClass='w-[100rem]'
              labelClass='text-[1.4rem] w-[20rem]'
              contentClass='mt-14'
              primaryBtnClass='w-[20rem] text-center bg-primary text-secondary-light border-none'
              secondaryBtnClass='w-[20rem] text-center'
              submitBtnName='????????????'
            />
          ) : (
            <StepThree
              pageType={pageType}
              shopName={location.state?.shopName}
            />
          )}
        </div>
      </MainTemplate>
      <Footer classes='mt-36' />
    </>
  )
}

export default Reservation
