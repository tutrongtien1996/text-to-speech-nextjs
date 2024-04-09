'use client'

const LandingPage = () => {
  return (
    <div>
      <div>
        <div className="contai_nav_home shadow">
          <div className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <a className="navbar-brand text-light fw-bold" href="#">
                SAPOTACORP
              </a>
              <div className="d-flex">
                <a href="/auth/login" className="btn btn-outline-light mx-2">
                  Sign up
                </a>
                <a href="/auth/login" className="btn btn-outline-light">
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-100 my-5">
        <div className="d-flex text-light justify-content-between px-3 py-2 title_input">
          <div>
            <h6>Gửi yêu cầu cho AI</h6>
          </div>
          <div className="d-flex">
            <div className="wrapper d-none">
              <p style={{ marginBottom: '0px' }}>AI đang xử lý</p>
              <ul className="">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <button
                type="button"
                id="askAI"
                className="btn btn-outline-light shadow-none btn-sm"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
        <div className="bg-light ">
          <textarea
            className="w-100 p-3"
            id="text-prompt"
            rows={5}
            placeholder="enter your prompt..."
          ></textarea>
        </div>
        <div className="d-flex justify-content-between px-3 py-2 title_input mt-3">
          <div>
            <h6 className="text-light">Chuyển văn bản thành giọng nói</h6>
          </div>
          <div className="text-light">
            <span id="textLength">0</span>
            <span>/</span>
            <span>1000</span>
          </div>
        </div>
        <div className="bg-light ">
          <textarea
            className="w-100 p-3"
            id="text"
            rows={10}
            placeholder="enter text..."
          ></textarea>
        </div>
        <div className="p-3 bg-light d-flex justify-content-between shadow">
          <div className="contai_voices">
            <select
              className="form-control shadow-none content_voices"
              size={1}
              id="voiceId"
            >
              {/* {{#each voicesId}}
                                <option value="{{this}}">{{this}}</option>
                                {{/each}} */}
            </select>
          </div>
          <div className="text-light">
            <audio id="myAudio" src="#" preload="auto"></audio>
            <button
              type="button"
              id="convert"
              className="btn text-whitw"
              style={{ backgroundColor: '#00bcd4' }}
            >
              Chuyển đổi
            </button>
            <button
              type="button"
              id="play"
              className="btn btn-danger"
              style={{ display: 'none' }}
            >
              Đọc
            </button>
            <a
              id="download"
              className=""
              href="#"
              download="voice-text-to-speech.mp3"
              style={{ display: 'none', color: 'white' }}
            >
              Tải file MP3
            </a>
          </div>
        </div>
      </div>

      <div className="container w-75 py-5" id="servicePrices">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal" style={{ color: '#00bcd4' }}>
            Bảng Giá Dịch Vụ
          </h1>
          <p className="fs-5 text-muted">
            Khám phá thông tin bảng giá dịch vụ của{' '}
            <span style={{ color: '#00bcd4' }}>SAPOTACORP</span> ngay tại đây.
            Tất cả các dịch vụ đều có bản dùng thử miễn phí.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Cá nhân</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  0<small className="text-muted fw-light">/tháng</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>5.000 ký tự/ngày</li>
                  <li>Sử dụng 1 thiết bị</li>
                  <li>5 lần tải file/ngày</li>
                  <li>4 Giọng đọc tiêu chuẩn</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg"
                  style={{ borderColor: '#00bcd4', color: '#00bcd4' }}
                >
                  Đăng ký miễn phí
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Chuyên nghiệp</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  119,000<small className="text-muted fw-light">/tháng</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>2.500.000 ký tự/tháng</li>
                  <li>20.000 ký tự xử lý tối đa/chuyển đổi</li>
                  <li>Sử dụng trên 5 thiết bị</li>
                  <li>Không giới hạn lượt tải xuống</li>
                  <li>Thời gian lưu trữ: 30 ngày</li>
                  <li>Giọng đọc Việt Nam cao cấp</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg"
                  style={{ backgroundColor: '#00bcd4' }}
                >
                  Bắt đầu ngay
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card mb-4 rounded-3 shadow-sm"
              style={{ borderColor: '#00bcd4' }}
            >
              <div
                className="card-header py-3"
                style={{
                  backgroundColor: '#0f171c',
                  border: '#00bcd4',
                  color: '#00bcd4',
                }}
              >
                <h4 className="my-0 fw-normal">Doanh nghiệp</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  349,000<small className="text-muted fw-light">/tháng</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>4.000.000 ký tự/tháng</li>
                  <li>20.000 ký tự xử lý tối đa/chuyển đổi</li>
                  <li>Không giới hạn thiết bị</li>
                  <li>Không giới hạn lượt tải xuống</li>
                  <li>Thời gian lưu trữ: 45 ngày</li>
                  <li>Giọng đọc Việt Nam cao cấp</li>
                  <li>Giọng đọc Quốc tế (50+ ngôn ngữ, 200+ giọng đọc)</li>
                  <li>Ứng dụng di động (iOS & Android)</li>
                  <li>Xuất hóa đơn VAT</li>
                  <li>Cung cấp API</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg"
                  style={{ backgroundColor: '#00bcd4' }}
                >
                  Liên hệ chúng tôi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container contact p-4 shadow  mb-1 bg-white">
        <div className="w-100 text-center">
          <div className="w-100 pb-4 mb-3 position-relative">
            <h1 style={{ color: '#00bcd4' }} className="">
              LIÊN HỆ
            </h1>
            <div className="position-absolute bg-secondary top-100 start-50 translate-middle w-25 border-bottom"></div>
          </div>
          <ul>
            <li>
              <a href="#">
                <img src="/public/imgs/fab.png" alt="" width={50} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/public/imgs/zalo.png" alt="" width="50px" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/public/imgs/gmail.png" alt="" width="50px" />
              </a>
            </li>
          </ul>
          <p>0325187911 - 0901915121</p>
        </div>
        <div className="container">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example27"
                    placeholder="Enter Your Email..."
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  className="btn mb-4"
                  style={{ backgroundColor: '#00bcd4' }}
                >
                  Đăng Ký
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
