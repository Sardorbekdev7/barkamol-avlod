import Photos from '@/component/photos/Photos'
import Videos from '@/component/videos/Videos'
import { gallery, photos } from '@/data/data'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import React from 'react'

const index = () => {
  return (
    <div>
      <SEO metaTitle={'Axborot xizmati'}>
        <Layout>
          <Videos />
        </Layout>
      </SEO>
    </div>
  )
}

export default index