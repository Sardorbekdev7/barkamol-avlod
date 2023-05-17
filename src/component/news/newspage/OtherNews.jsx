import style from './style/newspage.module.css'
import time from '../../../../public/newspage/clock.svg'
import Image from 'next/image'
import Link from 'next/link'

const OtherNews = () => {
  return (
    <Link href={'/axborot-xizmati/yangiliklar/'}>
      <div className={style.othernew}>
        <div className={style.othernewstime}>
          <Image src={time} alt='' />
          <p>20:30 | 03.02.2023</p>
        </div>
        <p>Toshkent Shahar hokimiyati 30 nafar o’quvchining hirijda ta;lim olishiga yordam qiladi</p>
      </div>
    </Link>
  )
}

export default OtherNews