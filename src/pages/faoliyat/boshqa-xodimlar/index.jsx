import Stuffs from '@/component/stuffs/Stuffs'
import { stuffs } from '@/data/data'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import { getData } from '@/service/api.service'
import { useAuthStore } from '@/store/auth.store'
import React from 'react'

const index = () => {
  
  return (
    <SEO metaTitle={'Faoliyat'}>
      <Layout>
        <Stuffs api_link={'course_owners'} link={`Boshqa xodimlar`} title={"Toshkent shahar “Barkamol Avlod” bolalar maktabining xodimlari"} />
      </Layout>
    </SEO>
  )
}

export default index