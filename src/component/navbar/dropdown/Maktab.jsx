import { Dropdown, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const items = [
  {
    key: '1',
    label: (
      <Link href="/maktab/maktab-haqida/">Maktab haqida</Link>
    )
  },
  {
    key: '2',
    label: (
      <Link href="/maktab/rahbariyat/">Rahbariyat</Link>
    )
  },
  {
    key: '3',
    label: (
      <Link href="/maktab/maktab-tuzilmasi/">Maktab tuzilmasi</Link>
    )
  }
]


const Maktab = () => {
  const router = useRouter()

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
             Maktab
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Maktab