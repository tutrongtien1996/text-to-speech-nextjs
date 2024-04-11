import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const ModalContentProduct: React.FC<ModalProps> = ({ isOpen, toggle }) => {
  const [contentText, setContentText] = useState<string>('');
  const handleClose = () => {
    toggle(); 
    setContentText(''); 
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="popup_view modal-xl modal-dialog-centered">
      <ModalHeader toggle={handleClose} className="contai_header position-relative">
      </ModalHeader>
      <ModalBody>
        <div className="w-100 p-2 border top_popup text-center">
          <h5 className="modal-title text-white">Thông tin</h5>
        </div>
        <div className="row p-2 border gx-0">
            <div className="col">
                <ul>
                <li>
                    <div className="d-flex">
                    <p className="fw-bold me-3">ID:</p>
                    <p className="view_id"></p>
                    </div>
                </li>
                <li>
                    <div className="d-flex">
                    <p className="fw-bold me-3">Tiêu đề:</p>
                    <p className="view_title"></p>
                    </div>
                </li>
                <li>
                    <div className="d-flex">
                    <p className="fw-bold me-3">Số ký tự:</p>
                    <p className="view_number_chars"></p>
                    </div>
                </li>
                </ul>
            </div>
            <div className="col">
                <ul>
                <li>
                    <div className="d-flex">
                    <p className="fw-bold me-3">Giọng đọc: </p>
                    <p className="view_voice_name"></p>
                    </div>
                </li>
                <li>
                    <div className="d-flex">
                    <p className="fw-bold me-3">Tốc độ: </p>
                    <p>1.0x</p>
                    </div>
                </li>
                <li>
                    <div className="d-flex">
                    <p className="fw-bold me-3">Âm lượng: </p>
                    <p>100%</p>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        <div className="border py-2 px-3">
          <h6 className="fw-bold">Nội dung</h6>
          <p className="view_content_text">{contentText}</p>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalContentProduct;
