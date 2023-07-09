import { Button, Col, Form, Input, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import brand from '../../../public/footer/logo.svg'
import tel from '../../../public/footer/tel.svg'
import insta from '../../../public/footer/insta.svg'
import telegram from '../../../public/footer/telegram.svg'
import facebook from '../../../public/footer/facebook.svg'
import mail from '../../../public/footer/mail.svg'
import name from '../../../public/footer/name.svg'
import style from './footer.module.css'
import Link from 'next/link'

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className='container'>
        <Row>
          <Col lg={6} md={24}>
            <div className={style.footLeft}>
              <Row>
                <Col lg={24} md={12}>
                  <div className={style.footLeftImg}>
                    <div className={style.footBrand}>
                      <Image src={brand} alt='brand' />
                    </div>
                    <Image src={name} alt='name' />

                  </div>
                </Col>
                <Col lg={24} md={12}>
                  <div className={style.footLeftText}>
                    <span>10011, O’zbekiston, Toshkent, <br />
                    Shayxontoxur tumani, <br />
                    Navoiy ko’chasi, 2A uy 
                    </span>
                    <div className={style.aloqa}>
                      <a href='tel:+998712020909'><Image src={tel} alt='tel'/><p>(71) 202 09 09</p></a>
                      <a href="mailto:info@tbabm.uz"><Image src={mail} alt='mail' /><p>info@tbabm.uz</p></a>
                      <a href="https://www.facebook.com/tosh_babm" target='blank'><Image src={facebook} alt='facebook' /><p>@tosh_babm</p></a>
                      <a href="https://www.instagram.com/toshbabm" target='blank'><Image src={insta} alt='instagram' /><p>@toshbabm</p></a>
                      <a href="https://t.me/toshkent_babm" target='blank'><Image src={telegram} alt='telegram' /><p>@toshkent_babm</p></a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={18} md={24}>
            <div style={{

            }} className={style.footRight}>
              <div className={style.footRightForm}>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Input label='Ism Familya' placeholder='Ismingiz...' />
                  <Input placeholder='Elektron pochta...' />
                  <Button>
                    Obuna bo{`'`}lish
                  </Button>
                </Form>
              </div>
              <div className={style.footLeftItems}>
                <Row>
                  <Col>
                    <ul>
                      <li className={style.listactive}>Maktab</li>
                      <li><Link href={'/maktab/maktab-haqida/'}>Maktab haqida</Link></li>
                      <li><Link href={'/maktab/rahbariyat/'}>Rahbariyat</Link></li>
                      <li><Link href={'/maktab/maktab-tuzilmasi/'}>Maktab tuzilmasi</Link></li>
                    </ul>
                    <ul>
                      <li className={style.listactive}>Hujjatlar</li>
                      <li>331-qaror</li>
                      <li>4467-qaror</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li className={style.listactive}>Ta{`'`}lim yo{`'`}nalishlari</li>
                      <li><Link href={'/talim-yonalishlari/'}>Madaniyat va san{`'`}at</Link></li>
                      <li><Link href={'/talim-yonalishlari/'}>Texnika konstruktorlik va modellashtirish</Link></li>
                      <li><Link href={'/talim-yonalishlari/'}>Jismoniy tarbiya va sport</Link></li>
                      <li><Link href={'/talim-yonalishlari/'}>Hunarmandchilik va qo{`'`}l mehnati</Link></li>
                      <li><Link href={'/talim-yonalishlari/'}>Ekologiya va turizm</Link></li>
                      <li><Link href={'/talim-yonalishlari/'}>Oliy ta{`'`}lim muassasalari va maktabga tayyorlov</Link></li>
                      <li><Link href={'/talim-yonalishlari/'}>Xorijiy tillar</Link></li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li className={style.listactive}>Faoliyat</li>
                      <li><Link href={'/faoliyat/togarak-rahbarlari/'}>To{`'`}garak boshliqlari</Link></li>
                      <li><Link href={'/faoliyat/boshqa-xodimlar'}>Boshqa xodimlar</Link></li>
                      <li><br /></li>
                    </ul>
                    <ul>
                      <li className={style.listactive}>Axborot xizmati</li>
                      <li><Link href={'/axborot-xizmati/fotogalereya'}>Galereya</Link></li>
                      <li><Link href={'/axborot-xizmati/videogalereya'}>Videogaleya</Link></li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer