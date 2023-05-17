import style from './style/edu.module.css'
import { PlusOutlined } from '@ant-design/icons'
import img from '../../../public/edu/img1.svg'
import Image from 'next/image'
import { Collapse } from 'antd'
import Link from 'next/link';
import { useState } from 'react'
import OtherNews from '../news/newspage/OtherNews'

const { Panel } = Collapse;


const Edu = () => {
  const {icon, setIcon} = useState(true)


  return (
    <div className={style.edu}>
      <div className={style.eduimg}>
      </div>
      <div className={style.edutext}>
        <div className={style.edutextleft}>
        <Link href={'/talim-yonalishlari/'} >Talim yo’nalishlari {'>'}</Link>
        <Collapse 
          accordion
          // expandIcon={<PlusOutlined />}
          expandIconPosition='end'
          style={{
            border: 'none',
            borderBottom: '1px solid rgba(128, 128, 128, 0.5)',
            backgroundColor: 'white',
            marginTop: '50px',
            boxShadow: 'none',
        }}>
          <Panel header='Madaniyat va San’at' key={'1'}>
            <p>Ona tili</p>
          </Panel>
          <Panel header='Madaniyat va San’at' key={'2'}>
            <p>Ona tili</p>
          </Panel>
          <Panel header='Madaniyat va San’at' key={'3'}>
            <p>Ona tili</p>
          </Panel>
          <Panel header='Madaniyat va San’at' key={'4'}>
            <p>Ona tili</p>
          </Panel>
          <Panel header='Madaniyat va San’at' key={'5'}>
            <p>Ona tili</p>
          </Panel>
          <Panel header='Madaniyat va San’at' key={'6'}>
            <p>Ona tili</p>
          </Panel>
        </Collapse>
        </div>
        <div className={style.edutextright}>
          <h2>Yangiliklar</h2>
          <OtherNews />
        </div>
      </div>
    </div>
  )
}

export default Edu