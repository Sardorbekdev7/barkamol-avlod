import Bosses from '@/component/school/bosses/Bosses'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import React from 'react'

const BossPage = () => {
  return (
    <SEO metaTitle='Rahbariyat'>
      <Layout>
        <Bosses />
      </Layout>
    </SEO>
  )
}

export default BossPage