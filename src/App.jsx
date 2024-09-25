import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase by 4</button>
    </>
  )
}

export default App