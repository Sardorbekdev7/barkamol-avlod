import Link from 'next/link'
import style from './style/stuffs.module.css'
import { Col, Row } from 'antd'
import Image from 'next/image'
import Links from '../news/newspage/Links'

const Stuffs = ( { data, link, title }) => {
  return (
    <div className={style.container}>
      <div className={style.stuffs}>
        <div style={{display: 'flex'}}>
          <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>Axborot xizmati {'>'}</p>
          <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} href={'/axborot-xizmati/galereya/'}>{link}</Link>
        </div>
        <div>
          <div className={style.title}>
            <h1>{title}</h1>
          </div>
          <div>
            <Row>
              {data.map((item, key) => (
                <Col style={{margin: '0 auto'}} key={key} lg={6} md={12} sm={24} >
                  <div className={style.stuffCard}>
                    <Image src={item.image} alt='' width={250} height={333} />
                    <div className={style.stuffCardText} >
                      <h1>{item.name}</h1>
                      <p>{item.rank}</p>
                      <a href={`tel:${item.tel}`}>Telefon raqami: {item.tel}</a>
                      <br />
                      <a href={`mailto:${item.mail}`}>E-mail: {item.mail}</a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      <div className='back'>
          <Link href={'/'}>Ortga</Link>
      </div>
      </div>
    </div>
  )
}

export default Stuffs