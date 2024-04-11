export interface ResultProduct {
  id: number
  user_id: number
  title: string
  content: string
  voice_id: string
  url_audio?: string | null
  filename?: string
  number_chars: number
  speed: number
  volumn: number
  created_at?: Date
}

export interface InputProduct {
  id: number
  user_id: number
  title: string
  content: string
  voice_id: string
  filename?: string
  number_chars: number
  speed: number
  volumn: number
  created_at?: Date | undefined
  url_audio?: string | null
}
