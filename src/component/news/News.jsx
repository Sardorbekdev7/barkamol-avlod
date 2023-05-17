import { Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

import img1 from '../../../public/news/card1.svg'
import img2 from '../../../public/news/card2.svg'
import img3 from '../../../public/news/img3.svg'
import img4 from '../../../public/news/img4.svg'
import img5 from '../../../public/news/img5.svg'
import img6 from '../../../public/news/img6.svg'

import clock from '../../../public/news/clock.svg'

import style from './style/news.module.css'
import Link from 'next/link'

const News = () => {
  return (
    <Container style={{
      marginTop: '90px'
    }}>
      <div className={style.newscard}>
        <p>-Yangiliklar-</p>
        <h1>So’ngi yangilik, e’lon va habarlar</h1>
      </div>
      <Row>
        <Col lg={8} md={12} sm={24}>
          <div className={style.newscards}>
            <div className={style.newscardimg}>
              <p>Yangiliklar</p>
              <Link href={'/axborot-xizmati/yangiliklar/'}>
                <Image src={img1} alt='' />
              </Link>
            </div>
            <div className={style.newscardtext}>
              <div className={style.newscardtime}>
                <Image src={clock} alt='' />
                <span>03.02.2023</span>
              </div>
              <p>Prezident ta’lim sohasini rivojlantitish va takomillashtirish bo’yicha yana bir yangi qarorni tasdiqladi</p>
            </div>
          </div>
        </Col>
        <Col lg={8} md={12} sm={24}>
          <div className={style.newscards}>
            <div className={style.newscardimg}>
              <p>Matbuot hizmati</p>
              <Link href={'/axborot-xizmati/yangiliklar/'}>
                <Image src={img2} alt='' />
              </Link>
            </div>
            <div className={style.newscardtext}>
              <div className={style.newscardtime}>
                <Image src={clock} alt='' />
                <span>03.02.2023</span>
              </div>
              <p>Toshkent Barkamol Avlod Bolalar Maktabi shaxmat to’garaklari uchun joylar sonini ko’paytiradi</p>
            </div>
          </div>
        </Col>
        <Col lg={8} md={12} sm={24}>
          <div className={style.newscards}>
            <div className={style.newscardimg}>
              <p>Yangiliklar</p>
              <Link href={'/axborot-xizmati/yangiliklar/'}>
                <Image src={img3} alt='' />
              </Link>
            </div>
            <div className={style.newscardtext}>
              <div className={style.newscardtime}>
                <Image src={clock} alt='' />
                <span>03.02.2023</span>
              </div>
              <p>Toshkent Shahar hokimiyati 30 nafar o’quvchining hirijda ta;lim olishiga yordam qiladi</p>
            </div>
          </div>
        </Col>
        <Col lg={8} md={12} sm={24}>
          <div className={style.newscards}>
            <div className={style.newscardimg}>
              <p>Yangiliklar</p>
              <Link href={'/axborot-xizmati/yangiliklar/'}>
                <Image src={img4} alt='' />
              </Link>
            </div>
            <div className={style.newscardtext}>
              <div className={style.newscardtime}>
                <Image src={clock} alt='' />
                <span>03.02.2023</span>
              </div>
              <p>Gazprom Qozog’iston va O’zbekiston bilan uch tomonlama hamkorlikni muhokama qildi</p>
            </div>
          </div>
        </Col>
        <Col lg={8} md={12} sm={24}>
          <div className={style.newscards}>
            <div className={style.newscardimg}>
              <p>Matbuot hizmati</p>
              <Link href={'/axborot-xizmati/yangiliklar/'}>
                <Image src={img5} alt='' />
              </Link>
            </div>
            <div className={style.newscardtext}>
              <div className={style.newscardtime}>
                <Image src={clock} alt='' />
                <span>03.02.2023</span>
              </div>
              <p>Toshkent Aeroportida yo’lovchilarni kutib olish uchin bir nechta zonalar paydo bo’ladi</p>
            </div>
          </div>
        </Col>
        <Col lg={8} md={12} sm={24}>
          <div className={style.newscards}>
            <div className={style.newscardimg}>
              <p>Yangiliklar</p>
              <Link href={'/axborot-xizmati/yangiliklar/'}>
                <Image src={img6} alt='' />
              </Link>
            </div>
            <div className={style.newscardtext}>
              <div className={style.newscardtime}>
                <Image src={clock} alt='' />
                <span>03.02.2023</span>
              </div>
              <p>O’zbekiston maxsus borti Turkiyaga yetib bordi</p>
            </div>
          </div>
        </Col>
      </Row>
      
    </Container>
  )
}

export default News