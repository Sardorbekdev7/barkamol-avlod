import { Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
import mad from '../../../public/course/mad.svg'
import style from './style/couses.module.css'

const Courses = () => {
  return (
    <Container >
      <div className={style.coursecard}>
        <p>-To`garaklar-</p>
        <h1>Maktabimizdagi mavjud to`garaklar bilan tanishing</h1>
      </div>
      <Row>
        <Col lg={6} md={12} sm={24}>
          <div className={style.coursecards}>
            <h1>Madaniayt <br /> ba san`at</h1>
            <div className={style.coursecardoption}>
              <p>Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud</p> 
              <Image src={mad} alt=''/>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={24}>
          <div className={style.coursecards}>
            <h1>Texnika konstruktorlik va modellashtirish</h1>
            <div className={style.coursecardoption}>
              <p>Ushbu yo‘nalishida 17 turdagi to‘garak mavjud</p> 
              <Image src={mad} alt=''/>
            </div>
          </div>
        </Col>
        <Col lg={12} md={24} sm={24}>
          <div className={style.coursecards}>
            <h1>Oliy ta’lim muassasalari va maltablarga tayyorlov</h1>
            <div className={style.coursecardoption}>
              <p>Oliy ta’lim muassasalari va maktabga tayyorlov yo‘nalishida 8 turdagi (Ona tili va adabiyoti, Biologiya, Kimyo, Fizika, Matematika, Tarix, Mental arifmetika, Logika, matematika, husnixat, o’qish, tasviriy san’at, teatr va raqs) to‘garaklar mavjud</p> 
              <Image src={mad} alt=''/>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={12} sm={24}>
          <div className={style.coursecards}>
            <h1>Jismoniy tarbiya va sport</h1>
            <div className={style.coursecardoption}>
              <p>Ushbu yo‘nalishida 4 turdagi to‘garak mavjud</p> 
              <Image src={mad} alt=''/>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={24}>
          <div className={style.coursecards}>
            <h1>Hunarmandchilik va qo’l mehnati</h1>
            <div className={style.coursecardoption}>
              <p>Ushbu yo‘nalishida 14 turdagi to‘garak mavjud</p> 
              <Image src={mad} alt=''/>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={24}>
          <div className={style.coursecards}>
            <h1>Ekologiya va turizm</h1>
            <div className={style.coursecardoption}>
              <p>Ekologiya va turizm</p> 
              <Image src={mad} alt=''/>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={24}>
          <div className={style.coursecards}>
            <h1>Xorijiy Tillar</h1>
            <div className={style.coursecardoption}>
              <p>Ushbu yo‘nalishida 14 turdagi to‘garak mavjud</p> 
              <Image src={mad} alt=''/>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Courses