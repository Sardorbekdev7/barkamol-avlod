import style from './style/newspage.module.css'
import time from '../../../../public/newspage/clock.svg'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { getDataId } from '@/service/api.service'
import { useEffect } from 'react'
import { useAuthStore } from '@/store/auth.store'

const OtherNews = () => {
  const {news, setNews, setNewsId, newsId, setNew, new_id} = useAuthStore()


  const getNewData = () =>{
    getDataId('news', newsId).then(res => {
      setNew(res.data)
    })
  }

  useEffect(() => {
    getNewData()
    console.log(news);
  }, []);

  return (
    <div>
      {
        news.slice(0, 10).map((item ,key) => (
          <Link onClick={() => setNewsId(item.id)}  key={key} href={`/axborot-xizmati/yangiliklar/${item.id}`}>
            <div className={style.othernew}>
              <div className={style.othernewstime}>
                <Image src={time} alt='' />
                <p>{format(item.date == null ? new Date() : new Date(item.date), "dd MMM, yyyy")}</p>
              </div>
              <p>{item.name_uz}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default OtherNews