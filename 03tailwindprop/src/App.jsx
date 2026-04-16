import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  name: "k",
id: 3432
}

let Arr = [2,4,5]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwiind test</h1>
    <Card username = "PRiyam" btnText = "follow"/>
    <Card username = "Kaju"/>

      </>
  );
}

export default App
