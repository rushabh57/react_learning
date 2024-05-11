import { useState } from 'react';
import './App.css'

function App() {
  let [addCount , setAddCount] = useState(0);
  // let counter = 15;
  const addValue = () => {
    const newValue = addCount +1;
    setAddCount(newValue);
    console.log('added click', newValue);
  };
  
  const removeValue = () => {
    const newValue = addCount -1 ? addCount == 0 : addCount = 0;
    setAddCount(newValue);
    console.log('removed click', newValue);
  };
  


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
