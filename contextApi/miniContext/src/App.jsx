import { useState } from 'react'
import Login from './components/login'
import Profile from './components/profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>
        <h1>Hello Zaheer Khan</h1>
        <Login />
        <Profile />
      </UserContextProvider>
        
    </>
  )
}

export default App
