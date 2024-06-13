import { createContext, useEffect, useState } from 'react'
import { designData } from '../Components/assets/designData'

export const Context = createContext(null)

const ContextProvider = (props) => {
  const contextValue = { designData }
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}

export default ContextProvider