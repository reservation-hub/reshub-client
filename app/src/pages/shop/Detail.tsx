import Section from '@/components/Template/Section'
import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { MatchParams } from '@components/_PropsTypes'
import { useDispatch } from 'react-redux'
import { getOneShop } from '@/store/actions/shopAction'
import H1 from '@/components/common/H1'

const Detail = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params
  const convertId = Number(id)

  const dispatch = useDispatch()
  console.log(id)

  useEffect(() => {
    dispatch(getOneShop(convertId))
  }, [])

  return (
    <Section classes='lg:w-[100rem] w-full h-full mx-auto'>
      <div className='w-full h-[15rem] bg-gray-100 rounded-tl-lg rounded-tr-lg'>
        <div className='flex items-center p-5'>
          <img
            src='../img/salon.jpeg'
            alt=''
            className='w-[10rem] h-[10rem] rounded-lg'
          />
          <div className='pl-5 grid'>
            <H1>test</H1>
            <span>test</span>
          </div>
        </div>
      </div>
      <div className='w-full h-24 border'></div>
    </Section>
  )
}

export default Detail
