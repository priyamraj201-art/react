import { useState } from 'react'
import Usercontextprovider from './context/usercontextprovider'
import Profile from './components/profile'
import Login from './components/login'
import React from 'react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
    
    <h1>reaction with chai or code</h1>
    <Login/>
    <Profile/>
    
    </Usercontextprovider>
  )
}

export default App
