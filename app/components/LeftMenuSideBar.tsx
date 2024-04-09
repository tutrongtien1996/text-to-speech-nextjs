'use client'

import conversationIcon from '/public/assets/images/menuLeft/conversation.svg'
import studioIcon from '/public/assets/images/menuLeft/studio.svg'
import cartIcon from '/public/assets/images/menuLeft/cart.svg'
import userIcon from '/public/assets/images/menuLeft/user.svg'
import questionIcon from '/public/assets/images/menuLeft/question.svg'
import ItemMenu from './helper/ItemMenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo } from 'react'

const LeftMenuSideBar = () => {
  const pathName = usePathname()
  return (
    <div className=" contai_nav p-3">
      <div className="d-flex justify-content-between border-bottom">
        <div className="fw-bold h2 logo text-info">SAPOTACORP</div>
        <div className="d-flex align-items-center icon_arrow" role="button">
          <i
            className="fa-sharp fa-solid fa-arrow-left icon_toggle"
            style={{ fontSize: '24px', opacity: '60%' }}
          ></i>
        </div>
      </div>
      <div className="contai_content_list mt-3">
        <ul className="list-unstyled">
          <Link href="/studio">
            <ItemMenu
              icon={studioIcon}
              title="Studio"
              isActive={pathName.includes('/studio')}
            />
          </Link>
          <Link href="/conversations">
            <ItemMenu
              icon={conversationIcon}
              title="Conversation"
              isActive={pathName.includes('/conversations')}
            />
          </Link>
          <Link href="#">
            <ItemMenu
              icon={cartIcon}
              title="Mua gói cước"
              isActive={pathName.includes('/products')}
            />
          </Link>
          <Link href="#">
            <ItemMenu
              icon={questionIcon}
              title="Câu hỏi thường gặp"
              isActive={pathName.includes('/faqs')}
            />
          </Link>
          <Link href="#">
            <ItemMenu
              icon="/assets/images/facebook.png"
              title="Liên hệ facebook"
              isActive={pathName.includes('/contact')}
            />
          </Link>
          <li className="border-bottom"></li>
          <Link href="#">
            <ItemMenu
              icon={userIcon}
              title="User name"
              isActive={pathName.includes('/user')}
            />
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default memo(LeftMenuSideBar)
