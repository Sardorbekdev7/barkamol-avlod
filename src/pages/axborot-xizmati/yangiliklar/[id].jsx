import Newspage from '@/component/news/newspage/Newspage'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import React from 'react'

const NewPage = () => {
  return (
    <SEO metaTitle={`Yangiliklar`}>
      <Layout>
        <Newspage />
      </Layout>
    </SEO>
      
  )
}

export default NewPage