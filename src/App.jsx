import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {

  //useReducer(reducer, {state})
  //useReducer(reducer, {count : 0})

  const initialState = {count : 0}

  const reducer = (state, action) => {
    //return {count : state.count + 1}
    switch(action.type) {
      case 'increase' : {
        return {count : state.count + 1}
      }
      case 'decrease' : {
        return {count : state.count - 1}
      }
      default :  {
        return state;
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type : 'increase'})}>Increase</button>
      <button onClick={() => dispatch({type : 'decrease'})}>Decrease</button>
    </>
  )
}

export default App