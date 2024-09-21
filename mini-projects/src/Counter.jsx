import './Counter.css'

import { useState } from 'react'

function CounterApp() {

  const [counter, setCounter] = useState(0)
  //let counter = 0

  const addValue = () => {
   setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter >= 1) {
    setCounter(counter - 1)
    }
    else {
      alert("The value cannot be negative!")
    }
  }
  
  return (
    <>
    <div>
      <h1 className='font-mono my-8 text-3xl'>
        Basic Counter App
      </h1>
      <h2 className='my-8'>
        Counter Value : {counter} 
      </h2>
      <button
      onClick={addValue} className='counter-btn'
      >Add value</button> {" "}
      <button
      onClick={removeValue} className='counter-btn'
      >Remove value</button>
      {/* <p>Footer: {counter}</p> */}
      </div>
    </>
  )
}

export default CounterApp