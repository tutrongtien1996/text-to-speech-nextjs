'use client'
import  { createContext } from 'react'

type ProductContextType = any
const state = {};
const disPatch = () => {};
const defaultValue: ProductContextType = [
  state, 
  disPatch
]
const Context = createContext<ProductContextType>(defaultValue)

export default Context
