'use client'
import { useState } from 'react'

interface Participant {
  id: string
  voice_id: string
}

const ConversationForm = () => {
  const [mp3URL, setMp3URL] = useState<string>('')
  const [sentenceId, setSentenceId] = useState<number>(1)
  const [participants, setParticipants] = useState<Participant[]>([
    { id: '', voice_id: '' },
  ])
  const [conversation, setConversation] = useState<string[]>([])

  const addParticipantField = () => {
    setParticipants([...participants, { id: '', voice_id: '' }])
  }

  const removeParticipantField = (index: number) => {
    const updatedParticipants = [...participants]
    updatedParticipants.splice(index, 1)
    setParticipants(updatedParticipants)
  }

  const handleParticipantChange = (
    value: string,
    index: number,
    field: string
  ) => {
    const updatedParticipants = [...participants]
    if (field === 'id') updatedParticipants[index].id = value
    else if (field === 'voice_id') updatedParticipants[index].voice_id = value
    setParticipants(updatedParticipants)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const people = participants.map(({ id, voice_id }) => ({ id, voice_id }))

      const formData = {
        voices: people,
        conversation: conversation.map((message) => {
          const person = message.split(': ')[0]
          const text = message.split(': ')[1]
          return { [person]: text }
        }),
      }

      //   const response = await axios.post('/api/convert/conversation', formData, {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Cookie: document.cookie,
      //     },
      //   })

      //   setMp3URL(response.data.data)
      showAudioSection()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const showAudioSection = () => {
    const audioWrapper = document.getElementById('audioWrapper')
    const audioPlayer = document.getElementById('audioPlayer')
    // if (audioPlayer) audioPlayer.src = mp3URL
    if (audioWrapper) audioWrapper.style.display = 'block'
  }

  const downloadAudio = () => {
    const link = document.createElement('a')
    link.href = mp3URL
    link.download = 'audio.mp3'
    link.click()
    link.remove()
  }

  return (
    <div id="content_wrapper" className="contai_content p-2 position-relative">
      <div className="">
        <div className="bg-light rounded-2 p-2 d-flex">
          <h2 className="title_page">Conversation Form</h2>
        </div>
        <form id="conversationForm" onSubmit={handleSubmit}>
          <div className="mt-2 rounded-2 p-3 bg-light">
            <div
              id="participantsContainer"
              className="rounded-2 d-flex flex-column participantsContainer"
            >
              {participants.map((participant, index) => (
                <div key={index} className="container_input_person d-flex">
                  <div className="contai_input_name">
                    <label htmlFor={`participantId${index}`}>
                      Person Name {index + 1}:
                    </label>
                    <input
                      className="participantId common-input"
                      type="text"
                      id={`participantId${index}`}
                      value={participant.id}
                      onChange={(e) =>
                        handleParticipantChange(e.target.value, index, 'id')
                      }
                      placeholder="Conversation name..."
                    />
                    <span></span>
                  </div>
                  <div className="contai_input_voice contai_input_name">
                    <label htmlFor={`participantVoice${index}`}>
                      Voice Name:
                    </label>
                    <select
                      className="participantVoice"
                      id={`participantVoice${index}`}
                      value={participant.voice_id}
                      onChange={(e) =>
                        handleParticipantChange(
                          e.target.value,
                          index,
                          'voice_id'
                        )
                      }
                    >
                      {/* Options for voice selection */}
                    </select>
                    <span></span>
                  </div>
                  {index > 0 && (
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm removeParticipantBtn"
                      onClick={() => removeParticipantField(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              id="addParticipantBtn"
              className="mt-2 btn btn-outline-info btn-sm "
              onClick={addParticipantField}
            >
              Add Person
            </button>
          </div>
          <div className="mt-2 rounded-2 p-3 bg-light">
            <div className="pb-2 pt-2 text_input">
              <textarea
                id="conversation"
                className="w-100 shadow-none p-2"
                placeholder="Nhập văn bản tại đây..."
                rows={13}
                style={{ outline: 'none', border: 'none' }}
                value={conversation.join('\n')}
                onChange={(e) => setConversation(e.target.value.split('\n'))}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-info text-light">
              Submit
            </button>
          </div>
        </form>
        <div id="audioWrapper" style={{ display: 'none' }}>
          <audio controls id="audioPlayer">
            <source src={mp3URL} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <br />
          <button onClick={downloadAudio}>Download MP3</button>
        </div>
      </div>
    </div>
  )
}

export default ConversationForm
