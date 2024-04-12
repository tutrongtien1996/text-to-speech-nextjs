'use client'
import React, { useReducer } from 'react'
import productReducer, { INIT_STATE } from './reducer'
import Context from './context'

function Provider({ children }: any) {
  const [state, disPatch] = useReducer(productReducer, INIT_STATE)

  return (
    <Context.Provider value={[state, disPatch]}>{children}</Context.Provider>
  )
}

export default Provider
