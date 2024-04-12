'use client'
import { useEffect, useState } from 'react'

import { findNameVoices, formatTime } from '@/controllers/helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faEye,
  faDownload,
  faPen,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import ModalContentProduct from './ModalProduct'
import { ResultProduct } from '@/lib/dbHelper'
import { toast } from 'react-toastify'
import { useStoreProduct } from '@/store/products'
import { deleteProduct } from '@/store/products/actions'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'

interface ItemProductProps {
  data: ResultProduct
  handlePlayAudio: (input: string) => void
  index: number
}
const ItemProduct = ({ data, handlePlayAudio, index }: ItemProductProps) => {
  const [_, disPatch] = useStoreProduct()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false)
  const handleToggleModal = () => {
    setIsOpenModal((prev) => !prev)
  }
  const handlePlay = () => {
    if (data.url_audio) {
      handlePlayAudio(data.url_audio)
    }
  }
  const handleDeleteProduct = () => {
    disPatch(deleteProduct({ data: { id: data.id, index: index }, disPatch }))
    setIsOpenModalConfirm(false)
  }
  const toggleModalDelete = () => {
    setIsOpenModalConfirm((prev) => !prev)
  }
  return (
    <>
      <Modal isOpen={isOpenModalConfirm} toggle={toggleModalDelete}>
        <ModalBody>
          <div
            style={{ minHeight: '150px' }}
            className="w-100 h-100 d-flex align-items-center justify-content-center"
          >
            <span>Bạn muốn xoá vĩnh viễn?</span>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="d-flex justify-content-around w-100">
            <button
              type="button"
              className="btn btn-info"
              onClick={() => handleDeleteProduct()}
            >
              Đồng ý
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setIsOpenModalConfirm(false)}
            >
              Huỷ
            </button>
          </div>
        </ModalFooter>
      </Modal>
      <tr className="border-bottom">
        <td className="ps-2 py-3">
          <input type="checkbox" />
        </td>
        <td className="col_title">{data.title}</td>
        <td className="col_chars">{data.number_chars}</td>
        <td className="col_date">{formatTime(data.created_at)}</td>
        <td className="col_status">thành công</td>
        <td className="col_voices">{findNameVoices(data.voice_id)}</td>
        <td className="col_action">
          <ul className="list-inline mt-3">
            <li
              className="list-inline-item play_text_details"
              onClick={() => handlePlay()}
            >
              <FontAwesomeIcon icon={faPlay} />
            </li>
            <li
              className="list-inline-item view_text_details"
              onClick={() => setIsOpenModal(true)}
            >
              <FontAwesomeIcon icon={faEye} />
            </li>
            <li className="list-inline-item download_text_details">
              <a
                id=""
                className="download text-dark"
                href={data.url_audio ?? '#'}
                download="voice-text-to-speech.mp3"
              >
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </li>
            <li className="list-inline-item edit_text_details">
              <FontAwesomeIcon icon={faPen} />
            </li>
            <li
              className="list-inline-item delete_text_details"
              onClick={() => setIsOpenModalConfirm(true)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </li>
          </ul>
        </td>
      </tr>
      <ModalContentProduct
        data={data}
        isOpen={isOpenModal}
        toggle={handleToggleModal}
      />
    </>
  )
}

export default ItemProduct
