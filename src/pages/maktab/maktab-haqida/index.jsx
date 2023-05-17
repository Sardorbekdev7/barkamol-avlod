import { About } from '@/component/school/about/About'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import React from 'react'

const SchoolAbout = () => {
  return (
    <SEO metaTitle='Maktab haqida'>
      <Layout>
        <About />
      </Layout>
    </SEO>
  )
}

export default SchoolAbout