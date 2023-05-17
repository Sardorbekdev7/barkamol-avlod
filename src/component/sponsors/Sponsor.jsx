import React from 'react'
import { Container } from 'react-bootstrap'
import style from './style/sponsor.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

import img1 from '../../../public/sponsors/img1.svg'
import img2 from '../../../public/sponsors/img2.svg'
import img3 from '../../../public/sponsors/img3.svg'
import img4 from '../../../public/sponsors/img4.svg'
import img5 from '../../../public/sponsors/img5.svg'

const Sponsor = () => {
  return (
    <Container>
      <div className={style.sponsorcard}>
        <p>-Hamkorlar-</p>
        <h1>Bizning hamkorlar</h1>
      </div>
      <Carousel showThumbs={false} autoPlay>
        <div className={style.sponsorcarousel}>
          <Image src={img1} alt='' />
          <p>O’zbekiston Respublikasi milliy huquqiy internet portali</p>
        </div>
        <div className={style.sponsorcarousel}>
          <Image src={img2} alt='' />
          <p>O’zbekiston Respublikasining qonun hujjatlari ma’lumotlar milliy bazasi</p>
        </div>
        <div className={style.sponsorcarousel}>
          <Image src={img3} alt='' />
          <p>Yagona interaktiv davlat xizmatlari portali</p>
        </div>
        <div className={style.sponsorcarousel}>
          <Image src={img4} alt='' />
          <p>O’zbekiston Respublikasining ochiq ma’lumotlar bazasi</p>
        </div>
        <div className={style.sponsorcarousel}>
          <Image src={img5} alt='' />
          <p>O’zbekiston Respublikasi Prezidenti rasmiy veb sayti</p>
        </div>
      </Carousel>

    </Container>
  )
}

export default Sponsor