import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Greet Stack")

  //This will run on every render because we are not passing 2nd dependency
  /* useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }); */ 

  //We are using emply array that's why it is loading 1 time
  /* useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, []); */ 

  //We are passing count variable in 2nd argument it means whenever count change it will load useEffect
  /* useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, [count]); */

  //We can pass multiple state into array means when name changes useEffect will also get loaded
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, [count, name]);

  return (
    <>
      <h1>I have rendered {count} times!</h1>
    </>
  )
}

export default App
