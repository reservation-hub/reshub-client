import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import Button from '../common/Button'
import Image from '../common/Image'
import CardTemplate from '../Template/CardTemplate'

export interface CardListProps {
  icon?: boolean
  img?: string
  name?: string
  price?: number
  buttonText?: string
}

const CardList = ({ icon, img, name, price, buttonText }: CardListProps) => {
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

      <div className='mt-5'>
        <p>{name}</p>
        {price && <p>指名料: {price.toLocaleString()}¥</p>}
      </div>

      <Button classes='bg-primary text-secondary-light mt-4 rounded-lg border-none'>
        {buttonText}
      </Button>
    </CardTemplate>
  )
}

export default CardList
