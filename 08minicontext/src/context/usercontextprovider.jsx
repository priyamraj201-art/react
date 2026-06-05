import React from 'react';
import Usercontext from './usercontext';
const [user,setuser] = React.useState(null)
const Usercontextprovider = ({children})=>{
  <Usercontext.Provider value={{user,setuser}}>
  {children}
  </Usercontext.Provider>
}

export default Usercontextprovider;
