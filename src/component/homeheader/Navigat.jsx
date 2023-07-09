import facebook from '../../../public/homeheader/facebook.svg'
import instagram from '../../../public/homeheader/instagram.svg'
import telegram from '../../../public/homeheader/telegram.svg'
import Link from 'next/link'

import Image from 'next/image'
import style from "./style/homeheader.module.css"

const Navigat = () => {
  return (
    <div className={style.navigat}>
        <Link href={'https://facebook.com/@tosh_babm'} target='__blank'>
          <Image src={facebook} alt='facebook' />
        </Link>
        <Link href={'https://instagram.com/@toshbabm'} target='__blank' style={{margin: '10px 0'}}>
          <Image src={instagram} alt='instagram' />
        </Link>
        <Link href={'https://t.me/@toshkent_babm'} target='__blank'>
          <Image src={telegram} alt='telegram' />
        </Link>
    </div>
  )
}

export default Navigat