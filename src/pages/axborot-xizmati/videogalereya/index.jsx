import VideoGallery from '@/component/videogallery/VideoGallery'
import { videogallery } from '@/data/data'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import React from 'react'

const index = () => {
  return (
    <SEO metaTitle={'Axborot xizmati'}>
      <Layout>
        <VideoGallery data={videogallery} titles={"Videogallereya"} />
      </Layout>
    </SEO>
  )
}

export default index