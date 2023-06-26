import Link from 'next/link'
import style from './style/gallery.module.css'
import { Col, Row } from 'antd'

const Gallery = ({data, titles}) => {
  return (
    <div className={style.container}>
      <div className={style.gallery}>
        <div style={{display: 'flex'}}>
          <p style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}}>Axborot xizmati {'>'}</p>
          <Link style={{color: '#3D3D3D', fontSize: '14px', fontFamily: 'Poppins'}} href={'/axborot-xizmati/galereya/'}>{titles}</Link>
        </div>
        <div>
          <h1>{titles}</h1>
          <div>
            <Row>
              {data.map((item, key)=> (
                <Col lg={6} md={12} sm={24}>
                  <div>
                    <img src={item.image} alt="" />
                  </div>
                  <div>
                    <p></p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery