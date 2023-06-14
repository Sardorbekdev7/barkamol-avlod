import React from 'react'
import style from "./style/homeheader.module.css"
import { Container } from 'react-bootstrap'
import backimg from '../../../public/homeheader/headerimg.jpg'
import Image from 'next/image'
import { Button, Col, Row } from 'antd'
import facebook from '../../../public/homeheader/facebook.svg'
import instagram from '../../../public/homeheader/instagram.svg'
import telegram from '../../../public/homeheader/telegram.svg'
import Link from 'next/link'

const HomeHeader = () => {
  return (
    <div className={style.homepage}>
      <div className={style.navigat}>
        <Link href={'https://facebook.com/@tosh_babm'} target='__blank'>
          <Image src={facebook} alt='facebook' />
        </Link>
        <Link href={'https://instagram.com/@toshbabm'} target='__blank' style={{margin: '10px 0'}}>
          <Image src={instagram} alt='instagram' />
        </Link>
        <Link href={'https://t.me/@toshkent_babm'} target='__blank'>
          <Image src={telegram} alt='telegram' />
        </Link>
      </div>
      <div className={style.container} >
          <Row style={{
            height: '100%'
          }}>
            <Col style={{
              height: '100%'
            }}
            lg={12} 
            md={24}
            >
              <div className={style.headertext}>
                <h2>Toshlent Shahar</h2>
                <h1>Barlamol Avlod <br />Bolalar Maktabi</h1>
                <p>Keling, koʻring, biz bilan birgalikda bolalar bilimini yuksaltiring!  Zero, Yangi Oʻzbekistonning kelajagi boʻlmish barkamol avlodni  voyaga yetkazish har birimizning burchimizdir.</p>
                <Button>Batafsil</Button>
              </div>
            </Col>
          </Row>
      </div>
    </div>
  )
}

export default HomeHeader