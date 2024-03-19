import React from 'react'
import SignupCard from '../components/SignupCard'
import LoginCard from '../components/Login'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import authScreenAtom from '../atoms/authAtoms'

const AuthPage = () => {
    const authScreenState = useRecoilValue(authScreenAtom)


  return (
    <>
  {authScreenState === "login" ? <LoginCard/> : <SignupCard/>}
    </>
  )
}

export default AuthPage