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


1.3 - New state change with previous state
-----------------------------------------------------------------------------------------------------------
App.jsx 
----------------------------------------------------------------
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase by 4</button>
    </>
  )
}

export default App

2.useEffect
-----------------------------------------------------------------------------------------------------------
The useEffect hooks allows you to perform side effects in your components.

Some examples of side effects are :
-----------------------------------------------------------------------------------------------------------

1.Fetching data from API

2.Directly updating the DOM

3.Timers like setTimeOut and setInterval

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

App.jsx 
----------------------------------------------------------------
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

Main.jsx
----------------------------------------------------------------
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <App />
  //</StrictMode>,
)

//Need to commit strict mode other wise count will start loading from 2


3.useRef
-----------------------------------------------------------------------------------------------------------
useRef is a react hook that allow us to Create mutable variables, which will not re-render the components.

useRef is also used for accessing  a DOM element.

3.1 - Increase infinite count
-----------------------------------------------------------------------------------------------------------
App.jsx 
----------------------------------------------------------------
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setValue(prev => prev - 1)
  }

  const increaseCount = () => {
    setValue(prev => prev + 1)
  }

  const effect = () => {
    setCount(prev => prev + 1)
  }
  
  useEffect(effect)

  return (
    <>
      <button onClick={decreaseCount}>-1</button>
      <h1>{value}</h1>
      <button onClick={increaseCount}>+1</button>
      <h1>Render count : {count}</h1>
    </>
  )
}

export default App

here count will increase infinite so we need to use useRef because it will not allow to render elements.

3.2 - count current value
-----------------------------------------------------------------------------------------------------------
App.jsx 
----------------------------------------------------------------
import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0);

  const count = useRef(0);//We have used useRef & store into count 

  const decreaseCount = () => {
    setValue(prev => prev - 1)
  }

  const increaseCount = () => {
    setValue(prev => prev + 1)
  }

  /* const effect = () => {
    setCount(prev => prev + 1)
  } */

  useEffect(() => {
    count.current = count.current + 1;
  })

  return (
    <>
      <button onClick={decreaseCount}>-1</button>
      <h1>{value}</h1>
      <button onClick={increaseCount}>+1</button>
      <h1>Render count : {count.current}</h1>
    </>
  )
}

export default App

3.3 - Accessing dom element
-----------------------------------------------------------------------------------------------------------
App.jsx 
----------------------------------------------------------------
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

4.useMemo
-----------------------------------------------------------------------------------------------------------
The React useMemo Hook returns a memoized value(It is like caching a value so that it does not need to be recalculated).

The useMemo Hook only runs when one of its dependencies gets update.

This can improve performance.

The useMemo and useCallback Hooks are similar. 

The main difference is that 

- useMemo returns a memoized value

- useCallback returns a memoized function.

App.jsx 
----------------------------------------------------------------
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


5.useCallback
-----------------------------------------------------------------------------------------------------------
When we use the useCallBack hook it doesn't create multiple instance of same function when re-render happens.

Instead of creating new instance of the function it provides the cached function on re-re-render of the component.

rafce -> create new component

5.1 - Render header component each time
----------------------------------------------------------------
App.jsx
----------------------------------------------------------------
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> // Here when we click button each time app component render that's why header is also rendering each & every time
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Click Here</button>
    </>
  )
}

export default App

Header.jsx
----------------------------------------------------------------
import React from 'react'

const Header = () => {
    console.log("Header rendered..")
    return (
        <div>
            <h2>Header</h2>
        </div>
    )
}

export default Header

so mocking Header.jsx to render each time we have to use useCallback hook


5.2 - Render header component one time
----------------------------------------------------------------
App.jsx
----------------------------------------------------------------
import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  const newFn = useCallback(() => {}, [])

  return (
    <>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Click Here</button>
    </>
  )
}

export default App

Header.jsx
----------------------------------------------------------------
import React from 'react'

const Header = () => {
    console.log("Header rendered..")
    return (
        <div>
            <h2>Header</h2>
        </div>
    )
}

export default React.memo(Header)

6.useContext 
-----------------------------------------------------------------------------------------------------------
useContext is react hooks that allow you access data from any component without explicitly passing it down through props at every level.

useContext is used to manager global data in the react app.

6.1 - creating context
----------------------------------------------------------------
creating a new folder context and a new file AppContext.jsx


AppContext.jsx
----------------------------------------------------------------
import React, { createContext } from 'react'

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "+1-994673673787";
    return (
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider

now we support context in our react project

main.jsx
----------------------------------------------------------------
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ContextProvider} from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
 
now we need to use this context in our project

6.2 - creating components
----------------------------------------------------------------
create a new folder components & create 3 jsx file.

Contact.jsx
----------------------------------------------------------------
import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  )
}

export default Contact

Footer.jsx
---------------------------------------------------------------
import React from 'react'

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  )
}

export default Footer

Profile.jsx
---------------------------------------------------------------
import React from 'react'
import Contact from './Contact'

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <Contact/>
    </div>
  )
}

export default Profile

App.jsx
---------------------------------------------------------------
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile/>
      <Footer/>
    </>
  )
}

export default App

