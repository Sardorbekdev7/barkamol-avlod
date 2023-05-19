import React from 'react'
import { Container } from 'react-bootstrap'
import style from './style/sponsor.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Image from 'next/image'

import img1 from '../../../public/sponsors/img1.svg'
import img2 from '../../../public/sponsors/img2.svg'
import img3 from '../../../public/sponsors/img3.svg'
import img4 from '../../../public/sponsors/img4.svg'
import img5 from '../../../public/sponsors/img5.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Sponsor = () => {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Container>
      <div className={style.sponsorcard}>
        <p>-Hamkorlar-</p>
        <h1>Bizning hamkorlar</h1>
      </div>
      <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        itemClass="carousel-item-padding-40-px"
      >
        <div className={style.sponsorcarousel}>
          <Image src={img1} alt='' />
          <p>O’zbekiston Respublikasi <br /> milliy huquqiy internet portali</p>
        </div>
        <div className={style.sponsorcarousel}>
          <Image src={img2} alt='' />
          <p>O’zbekiston Respublikasining <br /> qonun hujjatlari ma’lumotlar <br /> milliy bazasi</p>
        </div>
        <div className={style.sponsorcarousel}>
          <Image src={img3} alt='' />
          <p>Yagona interaktiv davlat <br /> xizmatlari portali</p>
        </div>
        <div className={style.sponsorcarousel}>
          <Image src={img4} alt='' />
          <p>O’zbekiston Respublikasining <br /> ochiq ma’lumotlar bazasi</p>
        </div>
        <div className={style.sponsorcarousel}>
          <Image src={img5} alt='' />
          <p>O’zbekiston Respublikasi <br /> Prezidenti rasmiy veb sayti</p>
        </div>
      </Carousel>

    </Container>
  )
}

export default Sponsor