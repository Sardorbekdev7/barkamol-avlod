import { Dropdown, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const items = [
  {
    key: '1',
    label: (
      <p>To{`'`}garak boshliqlari</p>
    )
  },
  {
    key: '2',
    label: (
      <p>Boshqa xodimlar</p>
    )
  }
]


const Faoliyat = () => {
  const router = useRouter()

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
             Faoliyat
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Faoliyat