import { useState, useEffect, useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useEffect(() => {
    console.log("Message form useEffect")
  },[])// It will diaplay 3rd

  useLayoutEffect(() => {
    console.log("Message form useLayoutEffect")
  },[])// It will diaplay 1st

  return (
    <>
      {/* It will diaplay 2nd */}
      <h2>Test Message</h2>
      {Array(40000).fill('').map((item, index) => (
        <li key = {index}>{Math.pow(Math.random(),10)}</li>
      ))}
    </>
  )
}

export default App

//useLayoutEffect called before mouting element & useEffect called after mounting element
