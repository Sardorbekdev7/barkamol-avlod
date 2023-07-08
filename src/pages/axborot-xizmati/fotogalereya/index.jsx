import Gallery from '@/component/gallery/Gallery'
import { gallery } from '@/data/data'
import Layout from '@/helps/Layout'
import SEO from '@/helps/SEO/SEO'

const index = () => {
  return (
    <SEO metaTitle={'Axborot xizmati'}>
      <Layout>
        <Gallery data={gallery} titles={"Fotogalereya"} />
      </Layout>
    </SEO>
  )
}

export default index