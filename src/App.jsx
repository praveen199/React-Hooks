import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setValue(prev => prev - 1)
  }

  const increaseCount = () => {
    setValue(prev => prev + 1)
  }

  const effect = () => {
    setCount(prev => prev + 1)
  }
  
  useEffect(effect)

  return (
    <>
      <button onClick={decreaseCount}>-1</button>
      <h1>{value}</h1>
      <button onClick={increaseCount}>+1</button>
      <h1>Render count : {count}</h1>
    </>
  )
}

export default App
