import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Usercontextprovider from './context/usercontextprovider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
    
    <h1>reaction with chai or code</h1>
    </Usercontextprovider>
  )
}

export default App
