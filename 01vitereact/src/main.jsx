import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>custom app</h1>
    </div>
  )
}


const ReactElement = {
    type: 'a',
    props: {
        href: "https://google.com",            // this is not in proper syntax so the render could not perform 
        target: '_blank'                       // we made custom render so that this syntax could work in custom.js
        
    },
    childen: 'Click me to visit google'
}

const anotherReactElement = (
  <a href="https://google.com" target="_blank">
    Click me to visit google
  </a>
)

const usernames = " Priyam raj"

const reactelement = React.createElement(
  'a',                   // firsr TAGS are used
  {
    href: 'https://google.com',    //then objects           // syntax required for render 
    target: '_blank'
  },
  'Click me to visit google' ,     //third texts
   usernames
)


createRoot(document.getElementById('root')).render(
  reactelement
)
