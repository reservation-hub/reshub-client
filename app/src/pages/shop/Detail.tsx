import React, { useEffect, useState } from 'react'
import Section from '@components/Template/Section'
import { RouteComponentProps } from 'react-router-dom'
import { MatchParams } from '@components/_PropsTypes'
import { useDispatch, useSelector } from 'react-redux'
import { getOneShop } from '@store/actions/shopAction'
import { RootState } from '@store/store'
import ShopDetail from '@components/detail/shop/ShopDetail'
import { DetailMenuItem, SECTION_TYPE } from '@constants/detail'
import Menu from '@components/detail/shop/Menu'
import Header from '@components/detail/shop/Header'
import { fetchAllStylist } from '@store/actions/stylistAction'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import StylistList from '@components/list/stylist/StylistList'
import { fetchAllMenu } from '@/store/actions/menuAction'
import MenuList from '@/components/list/menu/MenuList'

const Detail = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params
  const { shop, stylist, menu } = useSelector((state: RootState) => ({
    shop: state.shop.shop,
    stylist: state.stylist,
    menu: state.menus
  }))
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
    if (sectionType === SECTION_TYPE.INDEX) {
      dispatch(getOneShop(convertId))
    } else if (sectionType === SECTION_TYPE.STYLIST) {
      dispatch(
        fetchAllStylist({
          shopId: convertId,
          page: 1,
          order: OrderBy.ASC
        })
      )
    } else if (sectionType === SECTION_TYPE.MENU) {
      dispatch(
        fetchAllMenu({
          shopId: convertId,
          page: 1,
          order: OrderBy.ASC
        })
      )
    }
  }, [dispatch, sectionType])

  return (
    <Section classes='lg:w-[100rem] w-full mx-auto'>
      <div className='h-full'>
        <div className='w-full bg-primary rounded-tl-lg rounded-tr-lg text-secondary-main'>
          <Header item={shop} />
          <Menu menuItem={menuItem} sectionType={sectionType} />
        </div>
        {sectionType === SECTION_TYPE.INDEX ? (
          <ShopDetail
            item={shop}
            menuItem={menuItem}
            sectionType={sectionType}
          />
        ) : sectionType === SECTION_TYPE.MENU ? (
          <div className='my-10'>
            <MenuList item={menu.menus} boxText='メニュー一覧' />
          </div>
        ) : sectionType === SECTION_TYPE.STYLIST ? (
          <div className='my-10'>
            <StylistList item={stylist.stylists} boxText='スタイリスト一覧' />
          </div>
        ) : (
          <div>test haha3</div>
        )}
      </div>
    </Section>
  )
}

export default Detail
