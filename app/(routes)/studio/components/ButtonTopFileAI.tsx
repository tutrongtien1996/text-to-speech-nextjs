const TopButtonComponent = () => {
  return (
    <>
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
    </>
  )
}

export default TopButtonComponent
