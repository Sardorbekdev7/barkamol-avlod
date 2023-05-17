import React from 'react'
import style from './style/bosses.module.css'
import Link from 'next/link'
import { Col, Row } from 'antd'

import img from '../../../../public/bosses/img.svg'
import facebook from '../../../../public/bosses/facebook.svg'
import instagram from '../../../../public/bosses/instagram.svg'
import telegram from '../../../../public/bosses/telegram.svg'

import Image from 'next/image'

const Bosses = () => {
  return (
    <div className={style.bosses}>
      <div className={style.bosseslink}>
        <Link href={'/maktab/'}>Maktab</Link><p>{' > '}</p><Link href={'/maktab/rahbariyat/'}>Rahbariyat</Link>
      </div>
      <div>
        <Row>
          <Col style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }} 
          lg={12} md={12} sm={24}>
            <div className={style.bosscard}>
              <Image className={style.bossimg} src={img} alt='' />
            </div>
          </Col>
          <Col lg={12} md={12} sm={24}>
            <div className={style.bosscard}>
              <div className={style.boss}>
                <h1>Mirsagatova <br /> Tamara <br /> Maxamatovna</h1>
                <p>Toshkent shahar BABM direktori</p>
                <span>
                  Telefon raqami: +998 71 237 34 22 
                  E-mail: info@barkamolavlod.uz
                </span>
                <div>
                  <Image src={facebook} alt='' />
                  <Image src={instagram} alt='' />
                  <Image src={telegram} alt='' />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className={style.bosscard}>
              <Image src={img} alt='' />
              <div>
                <h1>Mirsagatova Tamara Maxamatovna</h1>
                <p>Toshkent shahar BABM direktori</p>
                <span>
                  Telefon raqami: +998 71 237 34 22 
                  E-mail: info@barkamolavlod.uz
                </span>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className={style.bosscard}>
              <Image src={img} alt='' />
              <div>
                <h1>Mirsagatova Tamara Maxamatovna</h1>
                <p>Toshkent shahar BABM direktori</p>
                <span>
                  Telefon raqami: +998 71 237 34 22 
                  E-mail: info@barkamolavlod.uz
                </span>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className={style.bosscard}>
              <Image src={img} alt='' />
              <div>
                <h1>Mirsagatova Tamara Maxamatovna</h1>
                <p>Toshkent shahar BABM direktori</p>
                <span>
                  Telefon raqami: +998 71 237 34 22 
                  E-mail: info@barkamolavlod.uz
                </span>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <div className={style.bosscard}>
              <Image src={img} alt='' />
              <div>
                <h1>Mirsagatova Tamara Maxamatovna</h1>
                <p>Toshkent shahar BABM direktori</p>
                <span>
                  Telefon raqami: +998 71 237 34 22 
                  E-mail: info@barkamolavlod.uz
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className='back'> 
          <Link href={'/'}>Ortga</Link>
      </div>
    </div>
  )
}

export default Bosses