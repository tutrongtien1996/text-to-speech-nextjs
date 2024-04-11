import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/lib/db'
import { responseResult } from '@/controllers/helper'
import { ProductModel } from '@/lib/product'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET': {
      try {
        const response = await ProductModel.list(req.body.user_id)
        return res.status(200).json(responseResult.success(response))
      } catch (err: any) {
        return res.status(500).json(responseResult.unsuccess(err.message))
      }
    }
    case 'POST': {
      try {
        const response = await ProductModel.create(req.body)
        return res.status(200).json(responseResult.success(response))
      } catch (err: any) {
        return res.status(500).json(responseResult.unsuccess(err.message))
      }
    }
    default: {
      return
    }
  }
}
