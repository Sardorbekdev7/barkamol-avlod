import Link from 'next/link'
import style from './style/photos.module.css'

import img from '../../../public/gallery/clock.svg'
import Image from 'next/image'
import Links from '../news/newspage/Links'

const Photos = ({ data, galereya }) => {
  return (
    <div className={style.container}>
      <div style={{display: "flex", width: "100%"}}>
        <div className={style.photos}>
            <div style={{display: 'flex'}}>
              <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>Axborot xizmati {'>'}</p>
              <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} href={'/axborot-xizmati/galereya/'}>{data.title}</Link>
            </div>
            <div>
              <h1>{data.title}</h1>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={img} alt='' />
                <p>20 : 30 | 03.02.2023</p>
              </div>
              <div>
                {data.photos.map((item, key) => (
                  <div className={style.photosImg} style={{margin: '15px 0'}}>
                    <img src={item} alt=''  />
                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className={style.otherPhotos}>
          <p>Boshqa lavhalar</p>
          {galereya.map((item, key) => (
            <div style={{margin: "16px"}}>
              <Image src={item.image} alt='' width={338} height={200} />
              <div style={{display: "flex", alignItems: "center"}}>
                <Image src={img} alt='' />
                <p>20 : 30 | 03.02.2023</p>
              </div>
              <h1>{item.deskeription}</h1>
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