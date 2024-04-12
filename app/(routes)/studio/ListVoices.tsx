import { useState } from 'react'
import {
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Dropdown,
} from 'reactstrap'

import { listVoices } from '@/controllers/constant'

const ListVoices = ({
  checkedId,
  onCheckedId,
}: {
  checkedId: number
  onCheckedId: (value: number) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="px-2">
        <Dropdown isOpen={isOpen} toggle={() => toggleDropdown()}>
          <DropdownToggle className="dropdown-toggle btn_toggle_voives">
            {listVoices[checkedId]?.title}
          </DropdownToggle>
          <DropdownMenu className="categories_voices">
            {listVoices?.map((voice, index) => (
              <DropdownItem onClick={() => onCheckedId(index)} key={index}>
                {voice.title}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  )
}

export default ListVoices
