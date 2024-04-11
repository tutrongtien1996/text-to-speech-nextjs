import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { API_URL_SERVER, API_URL_TEXT } from './constant'

interface APIResponse {}

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  return instance
}

class APIClient {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.axiosInstance = createAxiosInstance(baseURL)
  }

  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance
  }

  get = (url: string, params?: any): Promise<AxiosResponse<APIResponse>> => {
    return this.axiosInstance.get(url, { params })
  }

  create = (
    url: string,
    data: any,
    options?: any
  ): Promise<AxiosResponse<APIResponse>> => {
    if (options !== undefined) {
      return this.axiosInstance.post(url, data, options)
    }
    return this.axiosInstance.post(url, data)
  }

  update = async (
    url: string,
    data: any
  ): Promise<AxiosResponse<APIResponse>> => {
    const result = await this.axiosInstance.put(url, data)
    return result
  }

  delete = (url: string): Promise<AxiosResponse<APIResponse>> => {
    return this.axiosInstance.delete(url)
  }
}

const apiClient = new APIClient(API_URL_TEXT)
const apiServer = new APIClient(API_URL_SERVER)

const setAuthorization = (token: string): void => {
  apiClient.getAxiosInstance().defaults.headers.common['Authorization'] =
    'Bearer ' + token
  apiServer.getAxiosInstance().defaults.headers.common['Authorization'] =
    'Bearer ' + token
}

export { APIClient, apiClient, apiServer, setAuthorization }

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
