import Gallery from '@/component/gallery/Gallery'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import React from 'react'

const index = () => {
  return (
    <SEO metaTitle='Axborot xizmati'>
      <Layout>
        <Gallery />
      </Layout>
    </SEO>
  )
}

export default index