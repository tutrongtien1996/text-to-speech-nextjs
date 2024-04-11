import { listVoices } from "./constant";

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

function formatTime(input: Date | undefined): string {
  if(!input){
    return ''
  }
  const time = new Date(input);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();

  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
  const formattedMin = min < 10 ? `0${min}` : `${min}`;

  const format = `${year}-${formattedMonth}-${formattedDay} ${formattedHour}:${formattedMin}`;
  return format;
}

export { formatTime };

export const findNameVoices = (input: string): string | undefined => {
  const result: {
    id: string;
    title: string;
  } | undefined = listVoices.find((voice: {
    id: string;
    title: string;
  }) => voice.id === input);
  return result?.title;
}

