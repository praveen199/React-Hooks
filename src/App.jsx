import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const inputElement = useRef();

  const btnClicked = () => {
    inputElement.current.style.background = "blue";
  }

  return (
    <>
      <input type="text" ref={inputElement}></input>
      <button onClick={btnClicked}>Click Here</button>
    </>
  )
}

export default App
