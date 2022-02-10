import history from '@/utils/routers/history'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import Button from '../common/Button'
import CheckBox from '../common/CheckBox'
import Image from '../common/Image'
import { SelectedStylistValue } from '../reservation/_PropsTypes'
import CardTemplate from '../Template/CardTemplate'

export interface CardListProps {
  icon?: boolean
  useReservationForm?: boolean
  control?: any
  id?: number
  img?: string
  name?: string
  address?: string
  price?: number
  buttonText?: string
  url?: string
  setState?: React.Dispatch<React.SetStateAction<SelectedStylistValue>>
}

const CardList = ({
  icon,
  img,
  name,
  price,
  address,
  buttonText,
  useReservationForm,
  control,
  url,
  id,
  setState
}: CardListProps) => {
  return (
    <CardTemplate
      shadow
      classes='grid justify-center mt-5 p-5 rounded-lg border w-[17rem]'
    >
      {icon ? (
        <BiUserCircle className='w-40 h-40 mx-auto' />
      ) : (
        <Image imagePath={img} alt='shop image' classes='w-40 h-40' />
      )}

      <div className='my-4'>
        <p>{name}</p>
        {price && <p>指名料: {price.toLocaleString()}¥</p>}
        {address && <p>{address}</p>}
      </div>

      {useReservationForm ? (
        <div>
          <CheckBox
            name='stylistId'
            id={name}
            control={control}
            value={String(id)}
            label={buttonText}
            setState={setState}
            placeholder={String(price)}
            classes='border rounded-lg p-1'
          />
        </div>
      ) : (
        <Button
          onClick={() => history.push(String(url))}
          classes='bg-primary text-secondary-light mt-4 rounded-lg border-none'
        >
          {buttonText}
        </Button>
      )}
    </CardTemplate>
  )
}

export default CardList
