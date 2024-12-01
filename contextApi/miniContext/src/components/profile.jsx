import React, { useContext} from 'react'
import UserContext from '../context/UserContext'


function profile() {

  const {user} = useContext(UserContext);

  


  return !user ? <div>Please Login</div> : 
  (

    <div>
      <h2>Welcome to the DashBoard</h2>
      <h3>{user.username}</h3>
      <h3>{user.password}</h3>
    </div>
  )


}

export default profile