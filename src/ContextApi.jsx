import React, { children, useState } from 'react'
import { createContext } from 'react';



const AppProvider = createContext()


const ContextApi = ({children}) => {
    const[apon,setApon]=useState("tumi valo nah")
  return (
    <div>
      <AppProvider value={apon}>
        {children}
      </AppProvider>
    </div>
  )
}

export default ContextApi

export {AppProvider}