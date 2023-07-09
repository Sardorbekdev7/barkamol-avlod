import { course } from '@/data/data'
import { getData } from '@/service/api.service'
import { useAuthStore } from '@/store/auth.store'
import { Dropdown, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'






const Talim  = () => {
  const router = useRouter()

  const {category, setCategory} = useAuthStore()

  const getCat = () => {
    getData('categories').then(res => {
      setCategory(res.data)
    })
  }

  useEffect(() => {
    getCat()
  }, []);

  const items = []

  category.map((item, key) => {
    items.push(
      {
        key: key,
        label: (
        <Link href={'/talim-yonalishlari/'}>{item.name_uz}</Link>
        )
      }
    )
  })

  return (
    <div>
      <Dropdown
        menu={{items}} 
      >
        <a onClick={(e) => e.preventDefault()}>
            <p>
             Talim 
            </p>
        </a>
      </Dropdown>
    </div>
  )
}

export default Talim 