import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('Blue');

  const changeColor = () => {
    setColor('Red');
  }

  return (
    <>
      <h1>My favourite color is : {color}</h1>
      <button onClick={changeColor}>Click Here</button>
    </>
  )
}

export default App