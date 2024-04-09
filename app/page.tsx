import Head from 'next/head'
import Image from 'next/image'
import LeftMenuSideBar from './components/LeftMenuSideBar'
import StudioPage from './(routes)/studio/page'

export default function Home() {
  return (
    <div className="d-flex justify-content-center vw-100  contai_body">
      <LeftMenuSideBar />
      <StudioPage />
    </div>
  )
}
