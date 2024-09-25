import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0);

  const count = useRef(0);//We have used useRef & store into count 

  const decreaseCount = () => {
    setValue(prev => prev - 1)
  }

  const increaseCount = () => {
    setValue(prev => prev + 1)
  }

  /* const effect = () => {
    setCount(prev => prev + 1)
  } */

  useEffect(() => {
    count.current = count.current + 1;
  })

  return (
    <>
      <button onClick={decreaseCount}>-1</button>
      <h1>{value}</h1>
      <button onClick={increaseCount}>+1</button>
      <h1>Render count : {count.current}</h1>
    </>
  )
}

export default App
