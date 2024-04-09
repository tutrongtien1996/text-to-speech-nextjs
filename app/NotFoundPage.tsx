'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const NotFoundPage = () => {
  const router = useRouter()

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/')
    }, 3000)

    return () => clearTimeout(redirectTimer)
  }, [])

  return (
    <div>
      <h1>404 - Trang không tồn tại</h1>
      <p>Bạn sẽ được chuyển hướng về trang chủ trong ít phút...</p>
    </div>
  )
}

export default NotFoundPage
