import Section from '@/components/Template/Section'
import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { MatchParams } from '@components/_PropsTypes'
import { useDispatch } from 'react-redux'
import { getOneShop } from '@/store/actions/shopAction'

const Detail = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params
  const convertId = Number(id)

  const dispatch = useDispatch()
  console.log(id)

  useEffect(() => {
    dispatch(getOneShop(convertId))
  }, [])

  return <Section classes='h-full'></Section>
}

export default Detail
