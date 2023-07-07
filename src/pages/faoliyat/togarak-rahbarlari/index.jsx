import Stuffs from '@/component/stuffs/Stuffs'
import { stuffs } from '@/data/data'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import React from 'react'

const index = () => {
  return (
    <SEO metaTitle={'Faoliyat'}>
      <Layout>
        <Stuffs data={stuffs} link={`To’garak rahbarlari`} title={"Toshkent shahar “Barkamol Avlod” bolalar maktabining to’garak rahbarlari"} />
      </Layout>
    </SEO>
  )
}

export default index