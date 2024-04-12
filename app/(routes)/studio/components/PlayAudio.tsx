import { forwardRef } from 'react'

const PlayAudio = forwardRef<HTMLAudioElement, {}>((props, ref) => {
  return (
    <audio ref={ref} className="w-100" controls={true}>
      <source src="#" type="audio/mp3" />
    </audio>
  )
})

export default PlayAudio
