import { Col, Row } from 'antd'
import Image from 'next/image'
import React, { useEffect } from 'react'
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
import { useAuthStore } from '@/store/auth.store'
import { getData } from '@/service/api.service'


const News = () => {
  const {news, setNews, setNewsId, newsId} = useAuthStore()

  const getNewsData = () => {
    getData('news').then(res => {
      setNews(res.data)
    })
  }

  useEffect(() => {
    getNewsData()
  }, []);
  


  


  return (
    <Container style={{
      marginTop: '90px'
    }}>
      <div className={style.newscard}>
        <p>-Yangiliklar-</p>
        <h1>So’ngi yangilik, e’lon va habarlar</h1>
      </div>
      <Row>
        {news.map((item, key) => (
          <Col key={key} lg={8} md={12} sm={24}>
            <div className={style.newscards}>
              <div className={style.newscardimg}>
                <p>{item.media_type}</p>
                <Link onClick={() => setNewsId(item.id)} href={`/axborot-xizmati/yangiliklar/${item.id}/`}>
                  {item.photo && <Image src={item.photo} alt='' width={368} height={200} style={{borderRadius: "15px"}} /> }
                </Link>
              </div>
              <div className={style.newscardtext}>
                <div className={style.newscardtime}>
                  <Image src={clock} alt='' />
                  <span>03.02.2023</span>
                </div>
                <p>{item.name_uz}</p>
              </div>
            </div>
          </Col>
        ))}
        
      </Row>
      
    </Container>
  )
}

export default News