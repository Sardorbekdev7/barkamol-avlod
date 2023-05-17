import Footer from '@/component/footer/Footer'
import Navbar from '@/component/navbar/Navbar'
import Newspage from '@/component/news/newspage/Newspage'
import Layout from '@/helps/Layout'
import React from 'react'
import { Container } from 'react-bootstrap'

const News = () => {
  return (
      <Layout>
        <Newspage />
      </Layout>
   
  )
}

export default News