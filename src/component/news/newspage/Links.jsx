import style from './style/newspage.module.css'
import facebook from '../../../../public/news/facebook.svg'
import instagram from '../../../../public/news/instagram.svg'
import telegram from '../../../../public/news/telegram.svg'
import Image from 'next/image'

const Links = () => {
  return (
    <div className={style.newscard}>
            <p>Yangiliklarni tarmoqlarda ulashing</p>
            <div className={style.newslink}>
              <div className={style.newslinks}>
                <Image src={facebook} alt="" />
                <span>Facebook</span>
              </div>
              <div className={style.newslinks}>
                <Image src={instagram} alt="" />
                <span>Instagram</span>
              </div>
              <div className={style.newslinks}>
                <Image src={telegram} alt="" />
                <span>Telegram</span>
              </div>
            </div>
          </div>
  )
}

export default Links