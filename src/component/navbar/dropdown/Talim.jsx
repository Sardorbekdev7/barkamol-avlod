import { Dropdown, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const items = [
  {
    key: '1',
    label: (
      <Link href="/talim-yonalishlari/madaniyat-sanat/">Madaniyat va san{`'`}at</Link>
    )
  },
  {
    key: '2',
    label: (
      <Link href="/talim-yonalishlari/texnika/">Texnika konstruktorlik va modellashtirish</Link>
    )
  },
  {
    key: '3',
    label: (
      <Link href="/talim-yonalishlari/jismoniy-tarbiya/">Jismoniy tarbiya va sport</Link>
    )
  },
  {
    key: '4',
    label: (
      <Link href="/talim-yonalishlari/hunarmandchilik/">Hunarmandchilik va qo{`'`}l mehnati</Link>
    )
  },
  {
    key: '5',
    label: (
      <Link href="/talim-yonalishlari/ekologiya/">Ekologiya va turizm</Link>
    )
  },
  {
    key: '6',
    label: (
      <Link href="/talim-yonalishlari/oliy-talim/">Oliy ta{`'`}lim muassasalari va maktabga tayyorlov</Link>
    )
  },
  {
    key: '7',
    label: (
      <Link href="/talim-yonalishlari/xorijiy-tillar/">Xorijiy tillar</Link>
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