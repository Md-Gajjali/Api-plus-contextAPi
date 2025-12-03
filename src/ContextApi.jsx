import React, { children, useState } from 'react'
import { createContext } from 'react';



const AppProvider = createContext()


const ContextApi = ({children}) => {
    const[apon,setApon]=useState("hello world")
  return (
    <div>
      <AppProvider value={{apon, setApon}}>
        {children}
      </AppProvider>
    </div>
  )
}

export default ContextApi

export {AppProvider}