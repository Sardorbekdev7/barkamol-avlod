import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'
import img_1 from '../../../../public/gallery/clock.svg'
import img1 from '../../../../public/newspage/img1.svg'
import Image from 'next/image'
import { Button } from 'antd'
import style from './style/newspage.module.css'
import OtherNews from './OtherNews'
import Links from './Links'
import { getDataId } from '@/service/api.service'
import { useAuthStore } from '@/store/auth.store'
import { useEffect } from 'react'
import { format } from 'date-fns'

const Newspage = () => {
  const {news, setNews, setNewsId, newsId, setNew, new_id} = useAuthStore()


  const getNewData = () =>{
    getDataId('news', newsId).then(res => {
      setNew(res.data)
    })
  }

  useEffect(() => {
    getNewData()
    console.log(news);
  }, [newsId]);


  return (
    <div className={style.container}>
      <div className={style.newspages}>
        <div className={style.newspage}>
          <div>
            <p><Link href={'/'}>Axborot xizmati</Link> {`>`} <Link href={'/axborot-xizmati/yangiliklar/'}>Yangiliklar</Link></p> 
          </div>
          <h1>{new_id.name_uz}</h1>
          <div className='clock' style={{display: "flex", alignItems: 'center', justifyContent:'start'}}>
            <Image src={img_1} alt="" width={15} height={15} />
            <span style={{margin: "0 0 0 5px"}}>{format(new_id.date == null ? new Date() : new Date(new_id.date), "dd MMM, yyyy")}</span>
          </div>
          <img src={new_id.photo} alt=''/>
          <div className={style.newspagetext}>
            <p>
              {new_id.text_uz}
            </p>
          </div>
          <div className='back'>
            <Link href={'/'}>Ortga</Link>
          </div>

        </div>
        <div className={style.othernews}>
          <h2>Boshqa yangiliklar</h2>
          <OtherNews news={news} id={newsId} setId={setNewsId}  />
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Links />
      </div>
    </div>
  )
}

export default Newspage