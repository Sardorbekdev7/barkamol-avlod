import { Dropdown, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const items = [
  {
    key: '1',
    label: (
      <Link href={'/faoliyat/togarak-rahbarlari/'}>To{`'`}garak boshliqlari</Link>
    )
  },
  {
    key: '2',
    label: (
      <Link href={'/faoliyat/boshqa-xodimlar'}>Boshqa xodimlar</Link>
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