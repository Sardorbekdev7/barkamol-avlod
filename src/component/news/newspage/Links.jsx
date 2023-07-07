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
                <a style={{display: "flex", alignItems: "center"}} href="https://www.facebook.com/tosh_babm" target='blank'>
                  <Image src={facebook} alt="" />
                  <span>Facebook</span>
                </a>
              </div>
              <div className={style.newslinks}>
                <a style={{display: "flex", alignItems: "center"}}  href="https://www.instagram.com/toshbabm" target='blank'>
                  <Image src={instagram} alt="" />
                  <span>Instagram</span>
                </a>
              </div>
              <div className={style.newslinks}>
                <a style={{display: "flex", alignItems: "center"}}  href="https://t.me/toshkent_babm" target='blank'>
                  <Image src={telegram} alt="" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>
  )
}

export default Links