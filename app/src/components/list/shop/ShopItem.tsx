import React from 'react'
import SubTitle from '@/components/common/SubTitle'
import ShopInfo from '@/components/list/shop/ShopInfo'
import Card from '@/components/Template/Card'
import { Link } from 'react-router-dom'
import { PATHS } from '@/constants/paths'
import { IListDetailProps } from '@components/_PropsTypes'
import Tag from '@/components/common/Tag'

const ShopItem = <T extends Record<string, any>>({
  cell,
  items
}: IListDetailProps<T>) => {
  const goToShopDetailButton =
    'w-[15rem] p-2 bg-primary text-secondary-light text-center rounded-lg'

  return (
    <section className='px-5 pt-5 pb-2 h-full'>
      {items?.map((item, i) => (
        <Card key={i} classes='w-full border mb-5' shadow>
          {cell.map((field, i) => (
            <React.Fragment key={i}>
              <Link
                className='cursor-pointer'
                to={`/salon/detail/${item['id']}`}
              >
                {field.type === 'header' && (
                  <div className='border-b-2 px-5 flex items-center justify-between'>
                    <SubTitle text={item[field.key]} />
                    <span>rating and reviews</span>
                  </div>
                )}

                {field.type === 'body' && (
                  <div className='flex px-5 py-3 w-full'>
                    <div className='w-[10rem] h-[10rem] border-2'>
                      <img
                        src='img/salon.jpeg'
                        alt=''
                        className='w-full h-full'
                      />
                    </div>
                    <div className='px-5 grid'>
                      <span className='lg:text-[1.8rem]'>description</span>
                      <span>{item[field.key]}</span>
                      <ShopInfo item={item} />
                    </div>
                  </div>
                )}
              </Link>

              <div className='flex justify-between items-center mb-5'>
                {field.type === 'footer' && (
                  <>
                    <div className='flex flex-wrap max-w-lg pl-5'>
                      {item[field.key]?.map((v: any, i: number) => (
                        <Tag key={i}>{v?.slug}</Tag>
                      ))}
                    </div>
                    <div className='px-5'>
                      <Link
                        to={PATHS.RESERVATION}
                        className={goToShopDetailButton}
                      >
                        空席確認・予約
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </React.Fragment>
          ))}
        </Card>
      ))}
    </section>
  )
}

export default ShopItem
