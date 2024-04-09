const StudioPage = () => {
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
        {/* <div>
          <button type="button" className="btn btn-outline-info btn-lg btn_use_ai">Sử Dụng AI</button>
        </div> */}
      </div>
      <div className="mt-2 rounded-2 p-3 bg-light">
        <div className="border-bottom pb-2">
          <input
            className="px-3 py-2 w-100"
            type="text"
            id="title"
            style={{ outline: 'none', border: 'none' }}
            placeholder="Nhập Title..."
          />
        </div>
        <div className="border-bottom d-flex pt-2 pb-3 px-3 edit_voices">
          <div className="px-2 categories_voices_container">
            <ul
              className="categories_voices"
              style={{ marginBottom: '0px', paddingLeft: '0px' }}
            ></ul>
          </div>
          <div
            className="px-2"
            style={{
              maxHeight: '25px',
              marginLeft: '150px',
              borderLeft: '1px solid rgb(39, 39, 39)',
            }}
          >
            Âm lượng
          </div>
          <div
            className="px-2"
            style={{
              maxHeight: '25px',
              borderLeft: '1px solid rgb(39, 39, 39)',
            }}
          >
            Tốc độ
          </div>
        </div>
        <div className="border-bottom pb-2 pt-2 text_input d-none contai_ai">
          <div className="mb-2 d-flex justify-content-between">
            <div className="text-info">Gửi yêu cầu cho AI</div>
            <div className="d-flex">
              <div className="loading loading_AI me-2 d-none">
                <button>
                  Đang xử lý...
                  <svg>
                    <rect x="1" y="1"></rect>
                  </svg>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-info"
                  id="askAI"
                >
                  Gửi
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm hide_AI"
                >
                  X
                </button>
              </div>
            </div>
          </div>
          <textarea
            id="text-prompt"
            className="w-100 shadow-none p-2"
            placeholder="Nhập văn bản tại đây..."
            rows={4}
            style={{ outline: 'none', border: 'none' }}
          ></textarea>
        </div>
        <div className="border-bottom pb-2 pt-2 text_input">
          <textarea
            className="w-100 shadow-none p-2"
            id="text"
            placeholder="Nhập văn bản tại đây..."
            rows={13}
            style={{ outline: 'none', border: 'none' }}
          ></textarea>
        </div>
        <div className="p-2">
          <span>Bôi đen để nghe thử</span>
          <div className="d-flex justify-content-between">
            <div>
              <button type="button" className="btn btn-outline-secondary">
                Nghe thử
              </button>
            </div>
            <div className="d-flex align-items-center">
              <span>0/5000</span>
            </div>
            <div className="d-flex">
              <div className="loading loading_convert me-2 d-none">
                <button>
                  Đang xử lý...
                  <svg>
                    <rect x="1" y="1"></rect>
                  </svg>
                </button>
              </div>
              <div className="success_convert d-none">
                <button type="button" className="btn btn-outline-success">
                  Đã xong!
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-info text-white"
                  id="convert"
                >
                  Chuyển đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 pt-3">
        <div className="contai_audio">
          <audio className="w-100" controls={true}>
            <source src="#" type="audio/mp3" />
          </audio>
        </div>
      </div>
      <div className="row gx-0 mt-3 d-flex justify-content-end filter_check">
        <div className="col p-1">
          <div>
            <input type="text" placeholder="Nhập tiêu đề" />
          </div>
        </div>
        <div className="col p-1">
          <div>
            <input type="text" placeholder="trạng thái" />
          </div>
        </div>
        <div className="col p-1">
          <div>
            <input type="text" placeholder="Bắc đầu" />
          </div>
        </div>
        <div className="col p-1">
          <div>
            <input type="text" placeholder="Ngày kết thúc" />
          </div>
        </div>
      </div>
      <div id="table_product" className="mt-3 contai_table">
        <table>
          <thead>
            <tr>
              <th className="p-2 py-3">
                <input type="checkbox" />
              </th>
              <th>
                <div className="col_title">Tiêu đề</div>
              </th>
              <th>
                <div className="col_chars">Ký tự</div>
              </th>
              <th>
                <div className="col_date">Thời gian</div>
              </th>
              <th>
                <div className="col_status">Trạng thái</div>
              </th>
              <th>
                <div className="col_voices">Giọng đọc</div>
              </th>
              <th>
                <div className="col_action">Thành công</div>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      {/* The Modal view detail */}
      <div className="modal" id="myModal">
        <div className="popup_view modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header contai_header position-relative">
              <div className="close_popup">
                <button
                  type="button"
                  className="btn-close shadow-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            {/* Modal body */}
            <div className="modal-body">
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
                <p className="view_content_text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudioPage
