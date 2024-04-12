import type { Metadata } from 'next'
import type { Author } from 'next/dist/lib/metadata/types/metadata-types'

import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LeftMenuSideBar from './components/LeftMenuSideBar'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

const author: Author = {
  name: 'Tien.TT',
}
export const metadata: Metadata = {
  title: 'Text2Speech: Chuyển Đổi Văn Bản thành Giọng Nói',
  description:
    'Text2Speech là trang web tiên tiến và dễ sử dụng, giúp bạn chuyển đổi text thành giọng nói của bạn dễ dàng. Với giao diện người dùng trực quan, tất cả những gì bạn cần làm là nhập văn bản, chọn âm ly và nhanh chóng, bạn sẽ có âm thanh của bạn đã được tạo ra một cách hiệu quả. Xem xét thêm các tùy chọn để tùy chỉnh như tốc độ nói, âm sắc và tính năng nhận dạng cú pháp để tạo nên giọng nói đầy cá tính.',
  keywords: 'text to speech',
  authors: author,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="d-flex justify-content-center vw-100  contai_body">
          <ToastContainer />
          <LeftMenuSideBar />
          {children}
        </div>
      </body>
    </html>
  )
}
