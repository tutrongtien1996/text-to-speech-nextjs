// reducers.ts
import {
  CREATE_PRODUCTS,
  CREATE_PRODUCTS_FALSE,
  CREATE_PRODUCTS_SUCCESS,
  GET_LIST_PRODUCTS,
  GET_LIST_PRODUCTS_FALSE,
  GET_LIST_PRODUCTS_SUCCESS,
} from './constants'

type Action = { type: string; payload: any }
interface State {
  products: any[]
}
const INIT_STATE: State = {
  products: [],
}
const productReducer = (state = INIT_STATE, action: Action) => {
 
  switch (action.type) {
    case GET_LIST_PRODUCTS:
      return { ...state }
    case GET_LIST_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload
      }
    }
    case GET_LIST_PRODUCTS_FALSE: {
      return {
        ...state,
      }
    }
    case CREATE_PRODUCTS: {
      return {
        ...state
      }
    }
    case CREATE_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: [action.payload, ...state.products]
      }
    }
    case CREATE_PRODUCTS_FALSE: {
      return {
        ...state
      }
    }
    default:
      return {...state}
  }
}

export { INIT_STATE }
export default productReducer
