'use client'
import { useContext } from 'react'
import Context from './context'

export const useStoreProduct = () => {
  const [state, disPatch ] = useContext(Context);
  return [state, disPatch];
}
