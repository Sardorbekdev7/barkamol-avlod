import React, { useEffect } from 'react'
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
import { useAuthStore } from '@/store/auth.store';
import { getData } from '@/service/api.service';

const Sponsor = () => {
  const {sponsor, setSponsor} = useAuthStore()  

  const getSponsor = () => {
    getData('partners').then(res => {
      setSponsor(res.data)
      console.log(res.data);
    })
  }

  useEffect(() => {
    getSponsor()
  }, []);
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
      <div style={{marginBottom: '90px'}}>
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
          {sponsor.map((item, key) => (
            <div className={style.sponsorcarousel}>
              <div style={{height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <img src={item.image} alt=''/>
              </div>
              <p>{item.name_uz}</p>
            </div>
          ))}
          
        </Carousel>
      </div>

    </Container>
  )
}

export default Sponsor