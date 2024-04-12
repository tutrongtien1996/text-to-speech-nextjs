interface FooterActionProps {
  handleSubmit: () => void
  totalChar: number
  proccessing: boolean
  converting: boolean
}

const FooterAction: React.FC<FooterActionProps> = ({
  handleSubmit,
  totalChar,
  proccessing,
  converting,
}) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <button type="button" className="btn btn-outline-secondary">
          Nghe thử
        </button>
      </div>
      <div className="d-flex align-items-center">
        <span>{totalChar}/5000</span>
      </div>
      <div className="d-flex">
        <div
          className={`loading loading_convert me-2 ${
            !proccessing && !converting ? 'd-none' : ''
          }`}
        >
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
            className={`btn btn-info text-white ${
              proccessing || converting || totalChar === 0 || totalChar > 5000
                ? 'disabled'
                : ''
            }`}
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
