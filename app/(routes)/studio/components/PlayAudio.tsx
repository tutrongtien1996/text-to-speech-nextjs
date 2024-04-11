'use client'
import { useRef } from "react"

const PlayAudio = () => {
    const audioRef = useRef<HTMLAudioElement>(null)
    return (
        <audio ref={audioRef} className="w-100" controls={true}>
            <source src="#" type="audio/mp3" />
        </audio>
    )
}

export default PlayAudio