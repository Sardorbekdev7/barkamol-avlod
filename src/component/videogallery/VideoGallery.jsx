import Link from 'next/link'
import style from './style/videogallery.module.css'
import { Col, Row } from 'antd'
import Image from 'next/image'

import img from '../../../public/gallery/clock.svg'
import Links from '../news/newspage/Links'

const VideoGallery = ({data, titles}) => {
  return (
    <div className={style.container}>
      <div className={style.gallery}>
        <div style={{display: 'flex'}}>
          <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>Axborot xizmati {'>'}</p>
          <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} href={'/axborot-xizmati/galereya/'}>{titles}</Link>
        </div>
        <div>
          <h1>{titles}</h1>
          <div>
            <Row>
              {data.map((item, key)=> (
                <Col key={key} lg={8} md={12} sm={24}>
                  <Link href={'/axborot-xizmati/photos/'}>
                    <div className={style.galleryCard}>
                      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <iframe src={item.image} width={368} height={200} /> 
                      </div>
                      <div className={style.galleryText}>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '14px'}}>
                          <Image src={img} alt='' />
                          <p>20 : 30 | 03.02.2023</p>
                        </div>
                        <h1>{item.deskeription}</h1>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <div className='back'>
          <Link href={'/'}>Ortga</Link>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Links />
      </div>
    </div>
  )
}

export default VideoGallery