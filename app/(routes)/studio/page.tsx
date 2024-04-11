'use client'
import { useEffect, useState } from 'react'
import { useStoreProduct } from '@/store/products'

import { TextToSpeechService } from '@/controllers/textToSpeechService'
import { languageVoice, listVoices } from '@/controllers/constant'
import ListVoices from './ListVoices'
import TextForm from './TextForm'
import { createContentToSpeech } from '@/controllers/config'
import { createProducts, getListProducts } from '@/store/products/actions'
import { nanoid } from 'nanoid';
import ListProducts from './components/ListProducts'
import SearchProduct from './components/SearchProduct'
import PlayAudio from './components/PlayAudio'
import ModalContentProduct from './components/ModalProduct'
import FooterAction from './components/FooterAction'
import PromptAIComponent from './components/PromptAI'

const StudioPage = () => {
  const [state, disPatch] = useStoreProduct();
  const {products} = state;
  useEffect(() => {
    disPatch(getListProducts({ data: { user_id: 1234 }, disPatch }))
  }, [])
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [checkedId, setCheckedId] = useState(0)
  const handleCheckedId = (input: number) => {
    setCheckedId(input)
  }
  const handleChangeText = (input: string) => {
    setText(input)
  }

  const handleSubmitText = async () => {
    const dataText = createContentToSpeech(
      text,
      listVoices[checkedId].id,
      languageVoice.en
    )
    const response = await TextToSpeechService.create(dataText);
    if(response?.data?.success){
      const baseUrl = "https://blubberbeedev2.s3.ap-southeast-1.amazonaws.com/voices/";
      const data = {
        id: nanoid(),
        user_id: 1234,
        title: title || text.substring(0, 25),
        content: text,
        voice_id: listVoices[checkedId].id,
        filename: response.data.data.file.replace(baseUrl, ""),
        number_chars: 100,
        speed: 1,
        volumn: 100,
        url_audio: response.data.data.file
      }
      disPatch(createProducts({ data: data, disPatch }))
    }
  }
  const handleChangeTitle = (value: string) => {
    setTitle(value)
  }
  return (
    <div id="content_wrapper" className="contai_content p-2 position-relative">
      <div className="icon_bar d-none">
        <i className="fa-solid fa-bars" style={{ fontSize: '22px' }}></i>
      </div>
      <div className="bg-light rounded-2 p-2 d-flex top_content">
        <div>
          <input type="file" id="fileText" className="d-none" />
          <label
            htmlFor="fileText"
            className="btn btn-outline-secondary btn-lg me-4"
          >
            Tải file .txt
          </label>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-outline-info btn-lg btn_use_ai"
          >
            Sử Dụng AI
          </button>
        </div>
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
          />
        </div>
      </div>
      <div className="px-2 pt-3">
        <div className="contai_audio">
          <PlayAudio />
        </div>
      </div>
      <SearchProduct />
      <div id="table_product" className="mt-3 contai_table">
        <ListProducts
          products = {products}
         />
      </div>
      <ModalContentProduct
        isOpen={false}
        toggle={() => false}
      />
    </div>
  )
}

export default StudioPage
