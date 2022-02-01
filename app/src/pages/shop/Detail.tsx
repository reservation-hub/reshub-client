import React, { useEffect, useState } from 'react'
import Section from '@/components/Template/Section'
import { RouteComponentProps } from 'react-router-dom'
import { MatchParams } from '@components/_PropsTypes'
import { useDispatch, useSelector } from 'react-redux'
import { getOneShop } from '@/store/actions/shopAction'
import { RootState } from '@/store/store'
import ShopDetail from '@/components/detail/shop/ShopDetail'
import { DetailMenuItem, SECTION_TYPE } from '@/constants/detail'

const Detail = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params
  const { shop } = useSelector((state: RootState) => state.shop)
  const dispatch = useDispatch()
  const convertId = Number(id)

  const [sectionType, setSectionType] =
    useState<keyof typeof SECTION_TYPE>('INDEX')

  const menuItem: DetailMenuItem[] = [
    {
      label: 'サロン情報',
      slug: SECTION_TYPE.INDEX,
      click: () => setSectionType('INDEX')
    },
    {
      label: 'メニュー',
      slug: SECTION_TYPE.MENU,
      click: () => setSectionType('MENU')
    },
    {
      label: 'スタイリスト',
      slug: SECTION_TYPE.STYLIST,
      click: () => setSectionType('STYLIST')
    },
    {
      label: '口コミ',
      slug: SECTION_TYPE.REVIEW,
      click: () => setSectionType('REVIEW')
    }
  ]

  useEffect(() => {
    dispatch(getOneShop(convertId))
  }, [dispatch])

  return (
    <Section classes='lg:w-[100rem] w-full mx-auto'>
      <ShopDetail item={shop} menuItem={menuItem} sectionType={sectionType} />
      {/* <div className='w-full h-[13rem] bg-gray-100 rounded-tl-lg rounded-tr-lg'>
        <div className='flex justify-between items-center p-5'>
          <div className='flex items-center'>
            <img
              src='/img/salon.jpeg'
              alt=''
              className='w-[10rem] h-[10rem] rounded-lg'
            />
            <div className='pl-5 grid'>
              <H1>{shop.name}</H1>
              <span>
                {shop.prefectureName}
                {shop.cityName}
                {shop.address}
              </span>
            </div>
          </div>
          <div className=''>
            <div>
              <Button classes='w-[15rem] bg-primary p-4 rounded-lg text-secondary-main'>
                予約する
              </Button>
            </div>
            <div className='mt-3'>
              <Button
                onClick={() => history.goBack()}
                classes='w-[15rem] bg-secondary-main p-2 rounded-lg text-primary border-none'
              >
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

      <div className='w-full border mt-10'>
        <div className='w-full'>DESCRIPTION</div>

        <div className='w-full my-10'>
          <Box title='所属スタイリスト'>
            <div className='flex justify-between'>
              {shop.stylists?.map((v, i) => (
                <div key={i}>{v.name}</div>
              ))}
            </div>
          </Box>
        </div>

        <div className='w-full my-10'>
          <Box title='当店のメニュー'>
            <div className='flex justify-between'>
              {shop.menu?.map((v, i) => (
                <div key={i}>{v.name}</div>
              ))}
            </div>
          </Box>
        </div>
      </div> */}
    </Section>
  )
}

export default Detail
