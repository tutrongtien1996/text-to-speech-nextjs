'use client'
import { useEffect, useRef, useState } from 'react'
import { useStoreProduct } from '@/store/products'

import { toast } from 'react-toastify'
import { TextToSpeechService } from '@/controllers/textToSpeechService'
import { languageVoice, listVoices } from '@/controllers/constant'
import ListVoices from './ListVoices'
import TextForm from './TextForm'
import { createContentToSpeech } from '@/controllers/config'
import { createProducts, getListProducts } from '@/store/products/actions'
import { nanoid } from 'nanoid'
import ListProducts from './components/ListProducts'
import SearchProduct from './components/SearchProduct'
import PlayAudio from './components/PlayAudio'
import FooterAction from './components/FooterAction'
import PromptAIComponent from './components/PromptAI'
import TopButtonComponent from './components/ButtonTopFileAI'

const StudioPage = () => {
  const [state, disPatch] = useStoreProduct()
  const { products } = state
  useEffect(() => {
    disPatch(getListProducts({ data: { user_id: 1234 }, disPatch }))
  }, [])
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [totalChar, setTotalChar] = useState(0)
  const [checkedId, setCheckedId] = useState(0)
  const [converting, setConverting] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayAudio = (url: string) => {
    if (audioRef.current && url) {
      audioRef.current.src = url
      audioRef.current.play()
    }
  }
  const handleCheckedId = (input: number) => {
    setCheckedId(input)
  }
  const handleChangeText = (input: string) => {
    setText(input)
  }
  useEffect(() => {
    setTotalChar(text.length)
  }, [text])

  const toastCreate = (input: boolean) => {
    if (input) {
      toast.success('Tạo thành công!', {
        position: 'bottom-right',
      })
    } else {
      toast.error('Không thành công!', {
        position: 'bottom-right',
      })
    }
  }

  const handleSubmitText = async () => {
    setConverting(true)
    const dataText = createContentToSpeech(
      text,
      listVoices[checkedId].id,
      languageVoice.en
    )
    const response = await TextToSpeechService.create(dataText)
    setConverting(false)
    if (response?.data?.success) {
      const baseUrl =
        'https://blubberbeedev2.s3.ap-southeast-1.amazonaws.com/voices/'
      const data = {
        id: nanoid(),
        user_id: 1234,
        title: title || text.substring(0, 25),
        content: text,
        voice_id: listVoices[checkedId].id,
        filename: response.data.data.file.replace(baseUrl, ''),
        number_chars: totalChar,
        speed: 1,
        volumn: 100,
        url_audio: response.data.data.file,
        cb: toastCreate,
      }
      disPatch(createProducts({ data: data, disPatch }))
    }
  }
  const handleChangeTitle = (value: string) => {
    setTitle(value)
  }
  useEffect(() => {
    if (totalChar > 5000) {
      toast.warning('Số kí tự lớn hơn 5000!', { position: 'bottom-right' })
    }
  }, [totalChar])
  return (
    <div id="content_wrapper" className="contai_content p-2 position-relative">
      <div className="icon_bar d-none">
        <i className="fa-solid fa-bars" style={{ fontSize: '22px' }}></i>
      </div>
      <div className="bg-light rounded-2 p-2 d-flex top_content">
        <TopButtonComponent />
      </div>
      <div className="mt-2 rounded-2 p-3 bg-light">
        <div className="border-bottom pb-2">
          <input
            onChange={(e) => handleChangeTitle(e.target.value)}
            value={title}
            className="px-3 py-2 w-100"
            type="text"
            id="title"
            style={{ outline: 'none', border: 'none' }}
            placeholder="Nhập Title..."
          />
        </div>
        <div className="border-bottom d-flex pt-2 pb-3 px-3 edit_voices">
          <ListVoices checkedId={checkedId} onCheckedId={handleCheckedId} />
          <div className="px-2 volum_speed">Âm lượng</div>
          <div className="px-2 volum_speed">Tốc độ</div>
        </div>
        <div className="border-bottom pb-2 pt-2 text_input d-none contai_ai">
          <PromptAIComponent />
          <TextForm
            rows={4}
            id="text-prompt"
            onChange={() => console.log('')}
          />
        </div>
        <div className="border-bottom pb-2 pt-2 text_input">
          <TextForm rows={13} id="text" onChange={handleChangeText} />
        </div>
        <div className="p-2">
          <span>Bôi đen để nghe thử</span>
          <FooterAction
            handleSubmit={handleSubmitText}
            totalChar={totalChar}
            proccessing={state.proccessing}
            converting={converting}
          />
        </div>
      </div>
      <div className="px-2 pt-3">
        <div className="contai_audio">
          <PlayAudio ref={audioRef} />
        </div>
      </div>
      <SearchProduct />
      <div id="table_product" className="mt-3 contai_table">
        <ListProducts products={products} handlePlayAudio={handlePlayAudio} />
      </div>
    </div>
  )
}

export default StudioPage
