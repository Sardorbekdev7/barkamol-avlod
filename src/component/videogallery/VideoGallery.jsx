import Link from 'next/link'
import style from './style/videogallery.module.css'
import { Col, Row } from 'antd'
import Image from 'next/image'

import img from '../../../public/gallery/clock.svg'
import Links from '../news/newspage/Links'
import { useAuthStore } from '@/store/auth.store'
import { getData } from '@/service/api.service'
import Plyr from 'plyr'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { format } from 'date-fns'



const VideoGallery = ({data, titles}) => {
  const { videos, setVideos } = useAuthStore()

  const getVideos = () => {
    getData('video_gallery').then(res => {
      setVideos(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    getVideos()
  }, []);

  return (
    <div className={style.container}>
      <div className={style.gallery}>
        <div style={{display: 'flex'}}>
          <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>Axborot xizmati {'>'}</p>
          <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} href={'/axborot-xizmati/fotogalereya/'}>{titles}</Link>
        </div>
        <div>
          <h1>{titles}</h1>
          <div>
            <Row>
              {videos.map((item, key)=> (
                <Col key={key} lg={8} md={12} sm={24}>
                  <Link href={`/axborot-xizmati/videogalereya/${item.id}/`}>
                    <div className={style.galleryCard}>
                      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <ReactPlayer
                          url={item.video1}
                          width="368px"
                          height="200px"
                        />
                      </div>
                      <div className={style.galleryText}>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '14px'}}>
                          <Image src={img} alt='' />
                          <p>{format(item.date == null ? new Date() : new Date(item.date), "dd MMM, yyyy")}</p>
                        </div>
                        <h1>{item.name_uz}</h1>
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