import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


  //let counter = 5

  let [counter, setCounter] = useState(5)

  const addValue = () => {
  //counter = counter + 1
  console.log(counter,"clicked")
  setCounter(counter+1)
}

 const removeCounter = ()=>{
  if (counter>0) {
    setCounter(counter-1)
  }  
 }
  return (
    <>
    <h1>chai with priyam</h1>
    <h2>counter value: {counter}</h2>
    <button
    onClick={addValue}
    >add value {counter}</button>
    <br />
    <button
    onClick={removeCounter} 
    >remove value {counter}</button>


    </>
  )
}

export default App
