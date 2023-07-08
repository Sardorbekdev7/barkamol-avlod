import Link from 'next/link'
import style from './style/stuffs.module.css'
import { Col, Row } from 'antd'
import Image from 'next/image'
import Links from '../news/newspage/Links'
import { useAuthStore } from '@/store/auth.store'
import getStuffLeader, { getData } from '@/service/api.service'
import { useEffect } from 'react'

const Stuffs = ( {api_link, link, title }) => {
  const {stuffLeader, setStuffLeader} = useAuthStore()

  const getStuffLeader = () => {
    console.log(api_link);
    getData(api_link).then(res => {
      setStuffLeader(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    getStuffLeader()
  }, []);
  
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
              {stuffLeader.map((item, key) => (
                <Col style={{margin: '0 auto'}} key={key} lg={6} md={12} sm={24} >
                  <div className={style.stuffCard}>
                    {item.image && <Image src={item.image} alt='' width={250} height={333} />}
                      <div className={style.stuffCardText} >
                      <h1>{item.name_uz}</h1>
                      <p>{item.position_uz}</p>
                      <a href={`tel:${item.phone}`}>Telefon raqami: {item.phone}</a>
                      <br />
                      <a href={`mailto:${item.email}`}>E-mail: {item.email}</a>
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