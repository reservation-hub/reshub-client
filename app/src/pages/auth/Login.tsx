import React from 'react'
import LoginForm from '@components/auth/LoginForm'
import MainTemplate from '@components/Template/MainTemplate'
import Loading from '@/components/common/Loading'

const Login = () => {
  return (
    <MainTemplate classes='absolute'>
      <Loading />
    </MainTemplate>
  )
}

export default Login
