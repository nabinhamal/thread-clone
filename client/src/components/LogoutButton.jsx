import { Button } from '@chakra-ui/react'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import useShowToast from '../hooks/useShowToast'
import userAtom from '../atoms/userAtom'
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
    const setUser = useSetRecoilState(userAtom)
    const showToast = useShowToast()
    const handleLogout = async () => {
        try {
         
          //fetch
          const res = await  fetch("/api/users/logout",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
          })
          const data  = await res.json()
         

          if (data.error) {
            showToast("Error",data.error,"error")
            return 
          }
          localStorage.removeItem("user-threads") 
          setUser(null)

        } catch (error) {
          showToast("Error",error,"error")
        }
    }
  return (
   <></>
  )
}

export default LogoutButton