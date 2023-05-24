import { Dropdown, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


const items = [
  {
    key: '1',
    label: (
      <p>331-qaror</p>
    )
  },
  {
    key: '2',
    label: (
      <p>4467-qaror</p>
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