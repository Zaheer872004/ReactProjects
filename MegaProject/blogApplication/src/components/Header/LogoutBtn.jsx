import React from 'react'
import { useDispatch } from 'react-redux'
import { authService } from '../../appwrite/auth.service'
import { logout, login } from '../../store/authSlice'

function LogoutBtn() {
  
  const dispatch = useDispatch()
  
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  
  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default LogoutBtn