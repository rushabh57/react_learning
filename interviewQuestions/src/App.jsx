import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  
  const addValue = () =>{
    setCount(count + 1) // 16

    // setCount(count + 1) // 17
    // setCount(count + 1) //18
    // setCount(count + 1) //19
    // setCount(count + 1) //20
    // ======= reapeat any time  the function setCount() it's not 20 its 16 
    // Its because useState() useState send or change values in Batchs
    // If you wanna do like this functions do this way
    setCount((prevCounter) => prevCounter + 1)
    setCount((prevCounter) => prevCounter + 1)
    setCount((prevCounter) => prevCounter + 1)
  }
  const removeValue = () =>{
    setCount(count - 1)
  }
  return (
    <>
        <button onClick={addValue}>
          add / count is {count}
        </button>
        <button onClick={removeValue}>
          remove / count is {count}
        </button>
        
    </>
  )
}

export default App
