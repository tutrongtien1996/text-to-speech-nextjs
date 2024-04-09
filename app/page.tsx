'use client'

import { useRouter } from 'next/navigation'
import StudioPage from './(routes)/studio/page'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/studio')
  }, [])
  return <StudioPage />
}
