import Link from 'next/link'
import style from './style/photos.module.css'

import img from '../../../public/gallery/clock.svg'
import Image from 'next/image'
import Links from '../news/newspage/Links'
import { useAuthStore } from '@/store/auth.store'
import { getData, getDataId } from '@/service/api.service'
import { useEffect } from 'react'

const Photos = ({ data }) => {
  const {photo_id, setPhotoId, photo, setPhoto, setPhotos, photos} = useAuthStore()

  const getPhoto = () => {
    getDataId('photo_gallery', photo_id).then(res => {
      setPhoto(res.data)
      console.log(res.data);
      console.log(location)
    })
  }

  const getPhotos = () => {
    getData('photo_gallery').then(res => {
      setPhotos(res.data)
    }).catch(err => {
      console.log(err);
    })
  } 

  const getId = () => {
    const len = location.pathname.split('/').length
    setPhotoId(location.pathname.split('/')[len-1])
  }

  useEffect(() => {
    getPhoto()
    getPhotos()
  }, [photo_id]);

  useEffect(() => {
    getId()
  }, [])
 

  return (
    <div className={style.container}>
      <div style={{display: "flex", width: "100%"}}>
        <div className={style.photos}>
            <div style={{display: 'flex'}}>
              <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>Axborot xizmati {'>'}</p>
              <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} href={'/axborot-xizmati/fotogalereya/'}>{data.title}</Link>
            </div>
            <div>
              <h1>{photo.name_uz}</h1>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={img} alt='' />
                <p>20 : 30 | 03.02.2023</p>
              </div>
              <div>
                  <div className={style.photosImg} style={{margin: '15px 0', gap: '5px'}}>
                    {photo.image1 && <img style={{margin: '5px 0'}} src={photo.image1} alt=''  />}
                    {photo.image2 && <img style={{margin: '5px 0'}} src={photo.image2} alt=''  />}
                    {photo.image3 && <img style={{margin: '5px 0'}} src={photo.image3} alt=''  />}
                    {photo.image4 && <img style={{margin: '5px 0'}} src={photo.image4} alt=''  />}
                    {photo.image5 && <img style={{margin: '5px 0'}} src={photo.image5} alt=''  />}
                    {photo.image6 && <img style={{margin: '5px 0'}} src={photo.image6} alt=''  />}
                  </div>
              </div>
            </div>
        </div>
        <div className={style.otherPhotos}>
          <p>Boshqa lavhalar</p>
          {photos.slice(0, 10).map((item, key) => (
            <div key={key} style={{margin: "16px"}}>
              <Link onClick={() => setPhotoId(item.id)} href={`/axborot-xizmati/fotogalereya/${item.id}/`}>
                <Image src={item.image1} alt='' width={338} height={200} />
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

export default Photos