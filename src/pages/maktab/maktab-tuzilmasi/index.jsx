import Structure from '@/component/school/structure/Structure'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import React from 'react'

const index = () => {
  return (
    <SEO metaTitle='Maktab tuzilmasi'>
      <Layout>
        <Structure />
      </Layout>
    </SEO>
  )
}

export default index