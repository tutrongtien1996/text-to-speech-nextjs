import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { API_URL_TEXT } from './constant'
interface APIResponse {}

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL_TEXT,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  function (response) {
    return (
      response.data ? response.data : response
    ) as AxiosResponse<APIResponse>
  },
  function (error) {
    return Promise.reject(error)
  }
)

const setAuthorization = (token: string): void => {
  apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

class APIClient {
  get = (url: string, params?: any): Promise<AxiosResponse<APIResponse>> => {
    return apiClient.get(url, { params })
  }

  create = (
    url: string,
    data: any,
    options?: any
  ): Promise<AxiosResponse<APIResponse>> => {
    if (options !== undefined) {
      return apiClient.post(url, data, options)
    }
    return apiClient.post(url, data)
  }

  update = async (
    url: string,
    data: any
  ): Promise<AxiosResponse<APIResponse>> => {
    const result = await apiClient.put(url, data)
    return result
  }

  deletePut = (url: string): Promise<AxiosResponse<APIResponse>> => {
    return apiClient.put(url)
  }

  delete = (url: string): Promise<AxiosResponse<APIResponse>> => {
    return apiClient.delete(url)
  }
}

export { APIClient, setAuthorization }

export function getAccessToken() {
  let strUser = localStorage.getItem('authUser')
  let token
  if (strUser) {
    token = JSON.parse(strUser).token
  }
  return token
}

export interface contentToSpeech {
  text: string
  voiceId: string
  languageCode: string
}
export function createContentToSpeech(
  text: string,
  voiceId: string,
  languageCode: string
): contentToSpeech {
  return {
    text: text,
    voiceId: voiceId,
    languageCode: languageCode,
  }
}
