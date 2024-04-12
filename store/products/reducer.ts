// reducers.ts
import {
  CREATE_PRODUCTS,
  CREATE_PRODUCTS_FALSE,
  CREATE_PRODUCTS_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FALSE,
  DELETE_PRODUCT_SUCCESS,
  GET_LIST_PRODUCTS,
  GET_LIST_PRODUCTS_FALSE,
  GET_LIST_PRODUCTS_SUCCESS,
} from './constants'

type Action = { type: string; payload: any }
interface State {
  products: any[]
  proccessing: boolean
}
const INIT_STATE: State = {
  products: [],
  proccessing: false,
}
const productReducer = (state = INIT_STATE, action: Action) => {
  switch (action.type) {
    case GET_LIST_PRODUCTS:
      return { ...state }
    case GET_LIST_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
      }
    }
    case GET_LIST_PRODUCTS_FALSE: {
      return {
        ...state,
      }
    }
    case CREATE_PRODUCTS: {
      return {
        ...state,
        proccessing: true,
      }
    }
    case CREATE_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: [action.payload, ...state.products],
        proccessing: false,
      }
    }
    case CREATE_PRODUCTS_FALSE: {
      return {
        ...state,
        proccessing: false,
      }
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
      }
    }
    case DELETE_PRODUCT_SUCCESS: {
      const new_products = [...state.products].filter(
        (item) => item.id !== action.payload
      )
      return {
        ...state,
        products: new_products,
      }
    }
    case DELETE_PRODUCT_FALSE: {
      return {
        ...state,
      }
    }
    default:
      return { ...state }
  }
}

export { INIT_STATE }
export default productReducer
