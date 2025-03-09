import React, { createContext, useContext } from 'react'

export const mainContext = createContext({})

export const useMainContext =()=> useContext(mainContext)

const MainContextProvider = ({children}) => {

    const value={}

  return (
    <mainContext.Provider value={value}>{children}</mainContext.Provider>
  )
}

export default MainContextProvider