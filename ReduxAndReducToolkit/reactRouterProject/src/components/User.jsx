import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

  const { userId }  = useParams();


  return (
    <div className='text-center text-3xl justify-center items-center' >User <span className='text-orange-400 '>{userId}</span> is here </div>
  )
}

export default User

