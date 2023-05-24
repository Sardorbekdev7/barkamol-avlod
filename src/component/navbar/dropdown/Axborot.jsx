import { Dropdown, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const items = [
  {
    key: '1',
    label: (
      <p>Galereya</p>
    )
  },
  {
    key: '2',
    label: (
      <p>Videogaleya</p>
    )
  }
]


const Axborot = () => {
  const router = useRouter()

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
             Axborot xizmatlari
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Axborot