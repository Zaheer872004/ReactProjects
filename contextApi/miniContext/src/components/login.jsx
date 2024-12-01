import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


function login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {user, setUser} = useContext(UserContext);



  const handleSubmit = (e) => {

    e.preventDefault();

    setUser({username, password});

    setUsername('');
    setPassword('');
  }



  return (
    <div> 
      <h2>Login</h2>

      <input type="text"
      placeholder='Enter username'
      value={username}
      onChange={e=> setUsername(e.target.value)}
      />
      <br />
      <input type="password"
      placeholder='*****'
      value={password}
      onChange={e=> setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default login