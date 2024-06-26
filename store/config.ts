type FunctionType = (payload: any) => Promise<any>
const asyncAction = async (
  payload: any,
  asyncFunction: FunctionType,
  disPatch: (callback: any) => void,
  successCallback: (result: any) => void,
  errorCallback: (error: any) => void
) => {
  const result = await asyncFunction(payload)
  if (result && result.data.success) {
    disPatch(successCallback(result.data.data))
    if (payload?.cb) {
      payload.cb(true)
    }
  } else {
    errorCallback('not found')
    if (payload?.cb) {
      payload.cb(false)
    }
  }
}

export default asyncAction
