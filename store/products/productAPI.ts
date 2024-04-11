import { apiServer } from '@/controllers/config'

export const ProductsAPI: any = {
  list: async (input: any) => {
    try {
      const response = await apiServer.get(`/api/products`, input)
      return response
    } catch (err) {
      return false
    }
  },
  create: async (input: any) => {
    try {
      const response = await apiServer.create(`/api/products`, input)
      return response
    } catch (err) {
      return false
    }
  },
}
