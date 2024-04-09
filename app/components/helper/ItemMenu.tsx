'use client'

import Image from 'next/image'

const ItemMenu = (props: any) => {
  return (
    <li className={`rounded-2 my-2  ${props.isActive ? 'active_nav' : ''}`}>
      <div className="p-2 d-flex align-items-center">
        <div className="wrapper_img p-2">
          <Image
            width={22}
            height={22}
            src={props.icon}
            style={{ width: '22px' }}
            alt=""
          />
        </div>
        <span className="h6 my-0 ms-3">{props.title}</span>
      </div>
    </li>
  )
}

export default ItemMenu
