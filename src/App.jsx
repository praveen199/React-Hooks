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