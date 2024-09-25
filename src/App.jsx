import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    return Math.pow(num, 3);
  }

  //const result = cubeNum(number);

  const result = useMemo(() => {cubeNum(number),[number]});
  //useMemo accept 2 argument 1 is callBack function & 2nd is dependencies

  return (
    <>
      <input type="number" value={number} onChange={(e) => { setNumber(e.target.value)}} />
      <h1>Cube of the number : {result}</h1>
      <button onClick={() => {setCounter(counter + 1)}}>counter ++</button>
      <h1>Counter : {counter}</h1>
    </>
  )
}

export default App