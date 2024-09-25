import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Click Here</button>
    </>
  )
}

export default App
