import FileUpload from './UploadFileText'

const TopButtonComponent = ({
  setFileContent,
}: {
  setFileContent: (text: string) => void
}) => {
  return (
    <>
      <FileUpload setFileContent={setFileContent} />
      <div>
        <button
          type="button"
          className="btn btn-outline-info btn-lg btn_use_ai disabled"
        >
          Sử Dụng AI
        </button>
      </div>
    </>
  )
}

export default TopButtonComponent
