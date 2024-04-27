import { useState } from 'react';
import './App.css'

function App() {
  let [addCount , setAddCount] = useState(0);
  // let counter = 15;
  const addValue = () => {
    addCount = addCount < 20 ? addCount + 1 : 'reach limit';
    setAddCount(addCount);
    console.log('added click' , addCount)
  }
  const removeValue = () => {
    setAddCount(addCount > 0 ? addCount - 1 : 'reach end');
    console.log('removed click' , addCount)
    
  }


  // ========
  // useState([]) // empty array
  // useState(true) //boolean
  // useState('') // empty String
  // ========
  return (
    <>
<h1>Learning Hooks</h1>
<h1>Counter Value : {addCount}</h1>

<button onClick={addValue}>add Value {addCount}</button>
<button onClick={removeValue}>remove Value {addCount}</button>
    </>
  )
}

export default App
