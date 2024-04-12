import { ResultProduct } from '@/lib/dbHelper'
import ItemProduct from './ItemProduct'

const ListProducts: React.FC<{
  products: ResultProduct[]
  handlePlayAudio: (input: string) => void
}> = ({ products, handlePlayAudio }) => {
  return (
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
            <div className="col_action">Hành động</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((pro: ResultProduct, index: number) => (
            <ItemProduct
              handlePlayAudio={handlePlayAudio}
              key={index}
              data={pro}
              index={index}
            />
          ))}
      </tbody>
    </table>
  )
}

export default ListProducts
