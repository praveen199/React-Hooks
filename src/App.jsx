import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

function App() {

  //Here is accepts 2 argument,1st is key & 2nd is empty string
  //useLocalStorage hook return array
  const [name, setName] = useLocalStorage('userName', '')
  const [id, setId] = useLocalStorage('userId', '')

  return (
    <>
      <input type="text" placeholder=" Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <h2>Hello : {name}</h2>
      <input type="text" placeholder=" Enter Your Id" value={id} onChange={(e) => setId(e.target.value)} />
      <h2>Your Id : {id}</h2>
    </>
  )
}

export default App
