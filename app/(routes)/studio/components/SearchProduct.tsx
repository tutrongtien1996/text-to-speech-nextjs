

const SearchProduct = () => {
    return (
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
    )
}
export default SearchProduct