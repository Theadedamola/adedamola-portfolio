import { createContext, useEffect, useState } from 'react'
import { designData } from '../Components/assets/designData'
import { caseStudy } from '../Components/assets/casestudy'

export const Context = createContext(null)

const ContextProvider = (props) => {
  const contextValue = { designData, caseStudy }
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}

export default ContextProvider