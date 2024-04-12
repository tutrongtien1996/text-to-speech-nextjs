import {
  apiClient,
  contentToSpeech,
  getAccessToken,
  setAuthorization,
} from './config'

export const TextToSpeechService: any = {
  create: async (input: contentToSpeech) => {
    setAuthorization(getAccessToken())
    try {
      const response = await apiClient.create(`/text-to-speech`, input)
      return response
    } catch (err) {
      return false
    }
  },
}
