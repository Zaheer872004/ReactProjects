import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const countAddHandle = () => {
  //   if(count < 20){
  //     setCount(count + 1)
      

  //     setCount(count => count +1)
  //     setCount(count => count +1)
  //     setCount(count => count +1)

  //   }``
  // }

  

  return (
    <>
      <h1>Hello React from Zaheer Khan</h1>

      <p>Number of times Cliked {count}</p>
      <h1>Table here is {5 * count}</h1>
      <button 
      onClick={() => setCount((prevCount) => prevCount + 1 )}
      >Add count</button>

      {/* <button
      onClick={() => setCount(count - 1 )}
      >remove count</button> */}

    </>
  )
}

export default App
