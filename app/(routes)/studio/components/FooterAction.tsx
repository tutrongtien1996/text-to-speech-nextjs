
interface FooterActionProps {
    handleSubmit: () => void;
  }

const FooterAction: React.FC<FooterActionProps> = ({ handleSubmit }) => {
    return (
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
                  onClick={() => handleSubmit()}
                >
                  Chuyển đổi
                </button>
              </div>
            </div>
          </div>
    )
}

export default FooterAction