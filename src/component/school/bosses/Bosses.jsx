import React, { useEffect } from 'react'
import style from './style/bosses.module.css'
import Link from 'next/link'
import { Col, Row } from 'antd'

import img from '../../../../public/bosses/img.svg'
import facebook from '../../../../public/bosses/facebook.svg'
import instagram from '../../../../public/bosses/instagram.svg'
import telegram from '../../../../public/bosses/telegram.svg'

import Image from 'next/image'
import { useAuthStore } from '@/store/auth.store'
import { getData } from '@/service/api.service'

const Bosses = () => {
  const { leaders, setLeaders } = useAuthStore()

  const getLeaders = () => {
    getData('leaders').then(res => {
      setLeaders(res.data)
      console.log(leaders[0]);
    })
  }

  useEffect(() => {
    getLeaders()
  }, []);


  return (
    <div className={style.bosses}>
      <div className={style.bosseslink}>
        <Link href={'/'}>Maktab</Link><p>{' > '}</p><Link href={'/maktab/rahbariyat/'}>Rahbariyat</Link>
      </div>
      <div>
        <Row>
          <Col style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }} 
          lg={12} md={12} sm={24}>
            <div className={style.bosscard}>
              <img className={style.bossimg} src={leaders[0].image} alt='' />
            </div>
          </Col>
          <Col lg={12} md={12} sm={24}>
            <div className={style.bosscard}>
              <div className={style.boss}>
                <h1>{leaders[0].name_uz}</h1>
                <p>{leaders[0].position_uz}</p>
                <div className={style.bossConnect}>
                  <a href={`tel:${leaders[0].phone}`}>Telefon raqami: {leaders[0].phone}</a>
                  <br />
                  <a href={`mailto:${leaders[0].email}`}>E-mail: {leaders[0].email}</a>
                </div>
                <div>
                  <a href={'https://www.facebook.com/tosh_babm'} target='blank'>
                    <Image src={facebook} alt='' />
                  </a>
                  <a href="https://www.instagram.com/toshbabm" target='blank'>
                    <Image src={instagram} alt='' />
                  </a>
                  <a href="https://t.me/toshkent_babm" target='blank'>
                    <Image src={telegram} alt='' />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          {
            leaders.slice(1).map((item, key) => (
              <Col key={key} lg={6} md={12} sm={24}>
                <div className={style.bosscard}>
                  <img className={style.bossimg} src={item.image} alt={item.name_uz} />
                  <div className={style.bossText}>
                    <h1>{item.name_uz}</h1>
                    <p>{item.position_uz}</p>
                    <div className={style.bossConnect}>
                      <a href={`tel:${item.phone}`}>Telefon raqami: {item.phone}</a>
                      <br />
                      <a href={`mailto:${item.email}`}>E-mail: {item.email}</a>
                    </div>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </div>
      <div className='back'> 
          <Link href={'/'}>Ortga</Link>
      </div>
    </div>
  )
}

export default Bosses