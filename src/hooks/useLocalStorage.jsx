import React from 'react'
import { useState,useEffect } from 'react';

//In this custom hook we are accepting 2 paramater key & initial value
//Using key it will retrieve data from local storage below
const useLocalStorage = (key, initialValue) => {

  const [name, setName] = useState(
    localStorage.getItem('key') ? localStorage.getItem('key') : ''
  );

  //Using key it will store data from local storage below
  useEffect(() => {
    localStorage.setItem('key', name)
  }, [name, key])

  return [name, setName]//return the update state and setter function
}

export default useLocalStorage