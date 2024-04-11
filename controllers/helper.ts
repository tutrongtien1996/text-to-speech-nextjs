export type ID_VOICES_TYPE = {
  title: string
  id: string
}
interface ResponseResult {
  success(data: any): { success: boolean; message: string; data: any }
  unsuccess(message: string): { success: boolean; message: string | null }
}

const responseResult: ResponseResult = {
  success: (data) => {
    return {
      success: true,
      message: 'request success',
      data: data,
    }
  },
  unsuccess: (message) => {
    return {
      success: false,
      message: message,
    }
  },
}

export { responseResult }
