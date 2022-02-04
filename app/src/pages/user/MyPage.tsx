import React, { useEffect } from 'react'
import MainTemplate from '@/components/Template/MainTemplate'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { PATHS } from '@/constants/paths'
import Section from '@/components/Template/Section'
import MyPageTop from '@/components/detail/user/MyPageTop'

const MyPage = () => {
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <MainTemplate>
      <Switch>
        <Route exact path={PATHS.USER}>
          <Section>
            <div className='w-[100rem] h-full mx-auto'>
              <span className='mb-2'>こんにちは{user.id}さん</span>
              <MyPageTop />
            </div>
          </Section>
        </Route>

        <Route path={`${PATHS.USER}/edit`}>
          <div>haha</div>
        </Route>

        <Route path={`${PATHS.USER}/reservation`}>
          <div>haha2</div>
        </Route>
      </Switch>
    </MainTemplate>
  )
}

export default MyPage
