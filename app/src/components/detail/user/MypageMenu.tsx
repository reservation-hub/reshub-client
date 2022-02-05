import { MYPAGE_MENU } from '@/constants/paths'
import React from 'react'
import { Link } from 'react-router-dom'

const MypageMenu = () => {
  return (
    <div className='fixed right-0 left-[69rem] h-auto ml-5 flex justify-center mt-5'>
      <div className='w-[30rem] border rounded-lg'>
        <ul className='h-full'>
          {MYPAGE_MENU.map((v, i) => (
            <React.Fragment key={i}>
              <li key={i} className='p-3'>
                <Link to={v.path}>{v.text}</Link>
              </li>
              {i !== 3 && <hr />}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MypageMenu
