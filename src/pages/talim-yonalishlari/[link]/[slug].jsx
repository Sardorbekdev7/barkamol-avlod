import Course from '@/component/course/course-page/Course'
import { data } from '@/data/data'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import React, { useState } from 'react'

const CourePage = () => {
  
  return (
    <SEO metaTitle={"Ta'lim yo'nalishlari"}>
      <Layout>
        <Course data ={data} />
      </Layout>
    </SEO>
  )
}

export default CourePage