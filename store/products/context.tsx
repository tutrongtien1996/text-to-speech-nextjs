'use client'
import React, { createContext } from 'react'

type ProductContextType = any
const defaultValue: ProductContextType = {}
const Context = createContext<ProductContextType>(defaultValue)

export default Context
