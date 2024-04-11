// reducers.ts
import {
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
  console.log('da vao lis-----------')
  switch (action.type) {
    case GET_LIST_PRODUCTS:
      return { ...state }
    case GET_LIST_PRODUCTS_SUCCESS: {
      console.log(action)
      return {
        ...state,
      }
    }
    case GET_LIST_PRODUCTS_FALSE: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}

export { INIT_STATE }
export default productReducer
