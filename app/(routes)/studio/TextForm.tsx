'use client'

const TextForm = (props: {
  rows: number
  className?: string
  textInput?: string
  id?: string | ''
  onChange: (value: string) => void
}) => {
  return (
    <>
      <textarea
        className="w-100 shadow-none p-2"
        id={props.id}
        placeholder="Nhập văn bản tại đây..."
        rows={props.rows}
        style={{ outline: 'none', border: 'none' }}
        onChange={(e) => props.onChange(e.target.value)}
        value={props?.textInput}
      >
        {props?.textInput}
      </textarea>
    </>
  )
}

export default TextForm
