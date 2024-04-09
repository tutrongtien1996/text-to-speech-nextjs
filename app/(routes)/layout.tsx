'use client'

import LeftMenuSideBar from '../components/LeftMenuSideBar'

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="d-flex justify-content-center vw-100  contai_body">
      <LeftMenuSideBar />
      {children}
    </div>
  )
}
