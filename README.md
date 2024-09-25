# React + Vite

Create app using react vite
-----------------------------------------------------------------------------------------------------------
https://medium.com/@miahossain8888/how-to-create-a-react-app-with-vite-571883b100ef

Prerequisites
-----------------------------------------------------------------------------------------------------------
1.Node version ≥ 18.

2.NPM version 8.

npm create vite@latest

Done. Now run:

  1.cd react-all-hooks
  
  2.npm install
  
  3.npm run dev

All hooks in react
-----------------------------------------------------------------------------------------------------------
1.useState

2.useEffect

3.useRef

4.useMemo

5.useCallBack

6.useContext

7.useReducer

8.useLayoutEffect

1.useState
-----------------------------------------------------------------------------------------------------------
useState is a react hook,which cretes an "state variable" which helps us to track state in components & update the user interface when state changes.

1.1 - Single state
-----------------------------------------------------------------------------------------------------------
App.jsx 
----------------------------------------------------------------

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

1.2 - Multiple state
-----------------------------------------------------------------------------------------------------------
App.jsx 
----------------------------------------------------------------
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /* const [brand, setBrand] = useState('Ferrari');
  const [model, setModel] = useState('Roma');
  const [year, setYear] = useState('2023');
  const [color, setColor] = useState('red'); */

  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red"
  });

  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" } //here we are getting previous data using ...prev
    })
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <h2>It us a {car.color} {car.model} form {car.year}</h2>
      <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default App


