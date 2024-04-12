const PromptAIComponent = () => {
    return (
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
    )
}

export default PromptAIComponent