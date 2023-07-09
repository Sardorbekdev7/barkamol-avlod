import React from 'react'
import style from "./style/homeheader.module.css"
import { Container } from 'react-bootstrap'
import backimg from '../../../public/homeheader/headerimg.jpg'
import { Button, Col, Row } from 'antd'

import Navigat from './Navigat'

const HomeHeader = () => {
  return (
    <div className={style.homepage}>
      <Navigat />
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