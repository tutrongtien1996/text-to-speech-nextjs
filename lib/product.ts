import { db } from './db'
import { InputProduct, ResultProduct } from './dbHelper'

const ProductModel = {
  list: async (input: string | number) => {
    try {
      let results = await db('text_details')
        .select('*')
        .where('user_id', input)
        .orderBy('created_at', 'desc')
      return results
    } catch {
      return null
    }
  },

  create: async (
    input: InputProduct
  ): Promise<ResultProduct | null | undefined> => {
    try {
      // let filename = await generateFile(input.voiceId, input.content);
      input.filename = 'filename'
      if (true) {
        let result = await db<ResultProduct>('text_details').insert({
          id: input.id,
          user_id: input.user_id,
          title: input.title,
          content: input.content,
          voice_id: input.voice_id,
          url_audio: input.filename || null,
          number_chars: input.number_chars,
          speed: input.speed,
          volumn: input.volumn,
        })
        if (result) {
          let results = await db<ResultProduct>('text_details')
            .select('created_at')
            .where('id', input.id)
          input.created_at = results[0].created_at || undefined
          return input
        }
        return null
      }
    } catch (error) {
      return null
    }
  },

  delete: async (input: { id: string | number }) => {
    try {
      let results = await db('text_details').del().where('id', input.id)
      return true
    } catch {
      return false
    }
  },
}

export { ProductModel }
