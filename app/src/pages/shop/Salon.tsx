import React from 'react'
import ShopsCard from '@components/shop/ShopsCard'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const Salon = () => {
  const dispatch = useDispatch()
  const { shops, loading } = useSelector((state: RootState) => state.shop)
  return (
    <section className='my-10'>
      <div className='w-[100rem] border mx-auto'>
        <ShopsCard />
      </div>
    </section>
  )
}

export default Salon
