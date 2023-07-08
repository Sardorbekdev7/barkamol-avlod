import Link from 'next/link'
import style from './style/videos.module.css'

import img from '../../../public/gallery/clock.svg'
import Image from 'next/image'
import Links from '../news/newspage/Links'
import { useAuthStore } from '@/store/auth.store'
import { getData, getDataId } from '@/service/api.service'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'

const Videos = ({ data, galereya }) => {
  const {video_id, setVideoId, video, setVideo, setVideos, videos} = useAuthStore()

  const getVideo = () => {
    getDataId('video_gallery', video_id).then(res => {
      setVideo(res.data)
      console.log(location)
    })
  }

  const getVideos = () => {
    getData('video_gallery').then(res => {
      setVideos(res.data)
      console.log(res.data)
    })
  }

  const getId = () => {
    const len = location.pathname.split('/').length
    setVideoId(location.pathname.split('/')[len-1])
  }

  useEffect(() => {
    getVideo()
    getVideos()
    getId()
  }, [video_id]);
 

  return (
    <div className={style.container}>
      <div style={{display: "flex", width: "100%"}}>
        <div className={style.photos}>
            <div style={{display: 'flex'}}>
              <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>Axborot xizmati {'>'}</p>
              <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} href={'/axborot-xizmati/fotogalereya/'}>Videogalereya</Link>
            </div>
            <div>
              <h1>{video.name_uz}</h1>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={img} alt='' />
                <p>20 : 30 | 03.02.2023</p>
              </div>
              <div>
                  <div className={style.photosImg} style={{margin: '15px 0', gap: '5px'}}>
                    {video.video1 && <ReactPlayer style={{margin: '5px 0'}} url={video.video1} width="100%" controls />}
                    {video.video2 && <ReactPlayer style={{margin: '5px 0'}} url={video.video2} width="100%" controls />}
                    {video.video3 && <ReactPlayer style={{margin: '5px 0'}} url={video.video3} width="100%" controls />}
                    {video.video4 && <ReactPlayer style={{margin: '5px 0'}} url={video.video4} width="100%" controls />}
                    {video.video5 && <ReactPlayer style={{margin: '5px 0'}} url={video.video5} width="100%" controls />}
                    {video.video6 && <ReactPlayer style={{margin: '5px 0'}} url={video.video6} width="100%" controls />}
                  </div>
              </div>
            </div>
        </div>
        <div className={style.otherPhotos}>
          <p>Boshqa videolar</p>
          {videos.slice(0, 10).map((item, key) => (
            <div key={key} style={{margin: "16px"}}>
              <Link onClick={() => setVideoId(item.id)} href={`/axborot-xizmati/videogalereya/${item.id}/`}>
                <ReactPlayer
                  url={item.video1}
                  width="338px"
                  height="200px"
                />
              </Link>
              <div style={{display: "flex", alignItems: "center"}}>
                <Image src={img} alt='' />
                <p>20 : 30 | 03.02.2023</p>
              </div>
              <h1>{item.name_uz}</h1>
            </div>
          ))}
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

export default Videos