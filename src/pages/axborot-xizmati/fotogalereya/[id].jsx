import Photos from '@/component/photos/Photos'
import { gallery, photos } from '@/data/data'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'
import React from 'react'

const index = () => {
  return (
    <div>
      <SEO metaTitle={'Axborot xizmati'}>
        <Layout>
          <Photos data={photos} galereya={gallery} />
        </Layout>
      </SEO>
    </div>
  )
}

export default index