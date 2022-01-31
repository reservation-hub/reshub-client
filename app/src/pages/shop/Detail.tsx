import React, { useEffect } from 'react'
import Section from '@/components/Template/Section'
import { RouteComponentProps } from 'react-router-dom'
import { MatchParams } from '@components/_PropsTypes'
import { useDispatch, useSelector } from 'react-redux'
import { getOneShop } from '@/store/actions/shopAction'
import H1 from '@/components/common/H1'
import { RootState } from '@/store/store'
import Button from '@/components/common/Button'
import history from '@/utils/routers/history'

const Detail = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params
  const convertId = Number(id)
  const { shop } = useSelector((state: RootState) => state.shop)

  const dispatch = useDispatch()
  console.log(shop)

  useEffect(() => {
    dispatch(getOneShop(convertId))
  }, [dispatch])

  return (
    <Section classes='lg:w-[100rem] w-full h-full mx-auto'>
      <div className='w-full h-[13rem] bg-gray-100 rounded-tl-lg rounded-tr-lg'>
        <div className='flex justify-between items-center p-5'>
          <div className='flex items-center'>
            <img
              src='/img/salon.jpeg'
              alt=''
              className='w-[10rem] h-[10rem] rounded-lg'
            />
            <div className='pl-5 grid'>
              <H1>{shop.name}</H1>
              <span>{shop.prefectureName}{shop.cityName}</span>
            </div>
          </div>
          <div className=''>
            <div>
              <Button classes='w-[15rem] bg-primary p-4 rounded-lg text-secondary-main'>
                予約する
              </Button>
            </div>
            <div className='mt-3'>
              <Button onClick={() => history.goBack()} classes='w-[15rem] bg-secondary-main p-2 rounded-lg text-primary border-none'>
                戻る
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-24 border'>
        <ul className='flex justify-between items-center p-5'>
          <li>サロン情報</li>
          <li>メニュー</li>
          <li>スタイリスト</li>
          <li>口コミ</li>
        </ul>
      </div>
    </Section>
  )
}

export default Detail
