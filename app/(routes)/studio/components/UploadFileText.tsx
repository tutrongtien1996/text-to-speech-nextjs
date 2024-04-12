'use client'
import React, { ChangeEvent } from 'react'

const FileUpload = ({
  setFileContent,
}: {
  setFileContent: (text: string) => void
}) => {
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) {
        setFileContent(e.target.result.toString())
      }
    }
    reader.readAsText(file)
  }

  return (
    <div>
      <input
        type="file"
        id="fileText"
        onChange={handleFileChange}
        className="d-none"
      />
      <label
        htmlFor="fileText"
        className="btn btn-outline-secondary btn-lg me-4"
      >
        Tải file .txt
      </label>
    </div>
  )
}

export default FileUpload
