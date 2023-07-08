import Footer from '@/component/footer/Footer'
import Navbar from '@/component/navbar/Navbar'
import Newspage from '@/component/news/newspage/Newspage'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import React from 'react'
import { Container } from 'react-bootstrap'

const News = () => {
  return (
    <SEO metaTitle=''>
      <Layout>
        <Newspage />
      </Layout>
    </SEO>
      
   
  )
}

export default News