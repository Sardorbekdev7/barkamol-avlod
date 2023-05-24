import { Dropdown, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const items = [
  {
    key: '1',
    label: (
    <p>Madaniyat va san{`'`}at</p>
    )
  },
  {
    key: '2',
    label: (
      <p>Texnika konstruktorlik va modellashtirish</p>
    )
  },
  {
    key: '3',
    label: (
      <p>Jismoniy tarbiya va sport</p>
    )
  },
  {
    key: '4',
    label: (
      <p>Hunarmandchilik va qo{`'`}l mehnati</p>
    )
  },
  {
    key: '5',
    label: (
      <p>Ekologiya va turizm</p>
    )
  },
  {
    key: '6',
    label: (
      <p>Oliy ta{`'`}lim muassasalari va maktabga tayyorlov</p>
    )
  },
  {
    key: '7',
    label: (
      <p>Xorijiy tillar</p>
    )
  }
]


const Talim  = () => {
  const router = useRouter()

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p onClick={() => router.push("/talim-yonalishlari/")}>
             Talim 
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Talim 