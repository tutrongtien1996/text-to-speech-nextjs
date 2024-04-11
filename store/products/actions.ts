// actions.ts
import asyncAction from '../config'
import {
  CREATE_PRODUCTS,
  CREATE_PRODUCTS_FALSE,
  CREATE_PRODUCTS_SUCCESS,
  GET_LIST_PRODUCTS,
  GET_LIST_PRODUCTS_FALSE,
  GET_LIST_PRODUCTS_SUCCESS,
} from './constants'
import { ProductsAPI } from './productAPI'

export const getListProducts = (payload: any) => {
  asyncAction(
    payload.data,
    ProductsAPI.list,
    payload.disPatch,
    getListProductSuccess,
    getListProductFail
  )
  return {
    type: GET_LIST_PRODUCTS,
    payload,
  }
}

export const getListProductSuccess = (payload: any) => {
  return {
    type: GET_LIST_PRODUCTS_SUCCESS,
    payload,
  }
}

export const getListProductFail = (payload: any) => ({
  type: GET_LIST_PRODUCTS_FALSE,
  payload,
})

export const createProducts = (payload: any) => {
  asyncAction(
    payload.data,
    ProductsAPI.create,
    payload.disPatch,
    createProductSuccess,
    createProductFail,
  )
  return {
    type: CREATE_PRODUCTS,
    payload,
  }
}

export const createProductSuccess = (payload: any) => {
  return {
    type: CREATE_PRODUCTS_SUCCESS,
    payload,
  }
}
export const createProductFail = (payload: any) => {
  return {
    type: CREATE_PRODUCTS_FALSE,
    payload,
  }
}
