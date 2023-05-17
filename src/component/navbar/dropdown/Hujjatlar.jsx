import { Dropdown, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


const items = [
  {
    key: '1',
    label: (
      <Link href="/hujjatlar/331-qaror/">331-qaror</Link>
    )
  },
  {
    key: '2',
    label: (
      <Link href="/hujjatlar/4467-qaror/">4467-qaror</Link>
    )
  }
]
const HujjatlarNavbar = () => {
  const router = useRouter()

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
             Hujjatlar
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default HujjatlarNavbar