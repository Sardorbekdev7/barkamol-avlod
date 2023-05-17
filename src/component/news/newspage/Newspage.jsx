import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'
import img1 from '../../../../public/newspage/img1.svg'
import Image from 'next/image'
import { Button } from 'antd'
import style from './style/newspage.module.css'
import OtherNews from './OtherNews'

const Newspage = () => {
  return (
    <div className={style.container}>
      <div className={style.newspages}>
        <div className={style.newspage}>
          <div>
            <p><Link href={'/'}>Axborot xizmati</Link> {`>`} <Link href={'/axborot-xizmati/yangiliklar/'}>Yangiliklar</Link></p> 
          </div>
          <h1>«Sarflangan investitsiyalar ortig‘i bilan qaytishiga shubha yo‘q» - Shavkat Mirziyoyev maktabgacha ta’lim sohasiga e’tibor haqida</h1>
          <div>
            <span>20:30 | 03.02.2023         129</span>
          </div>
          <Image src={img1} alt='' width={'100%'} />
          <div className={style.newspagetext}>
            <p>
              <span>O‘zbekiston prezidenti maktabgacha ta’lim sohasida xalqaro hamkorlikni kengaytirish bo‘yicha muhim tashabbuslarni ilgari surdi.</span>
              Toshkent shahrida kichik yoshdagi bolalarni tarbiyalash va ularga ta’lim berish masalalari bo‘yicha jahon konferensiyasi bo‘lib o‘tdi. 15 noyabr kuni bu anjumanga O‘zbekiston prezidenti Shavkat Mirziyoyev tashrif buyurdi.
              <br />
              <br />
              Konferensiya dunyoda 2030 yilga qadar maktabgacha ta’lim sohasiga oid siyosatni belgilab olish va bu boradagi xalqaro hamkorlikni kengaytirishga qaratilgan. Unda YuNeSKO Bosh direktori Odri Azule, 150 ga yaqin mamlakatdan vazirlar va vakillar, xalqaro tashkilotlar mutasaddilari qatnashmoqda.
              <br />
              <br />
              Davlat rahbari nutqining avvalida soha bo‘yicha dunyodagi vaziyatga to‘xtalib, millionlab bolalarning boshlang‘ich bilim olish imkoniyati cheklangani, mutaxassislar birgalashib, maktabgacha ta’lim qamrovini oshirishi muhimligini aytdi. O‘zbekistonda «inson qadri, uning huquq va manfaatlari – oliy qadriyat» degan tamoyil asosida aholi uchun munosib turmush sharoitlari yaratilayotgani ta’kidlandi.
              <h4>«Bu borada, avvalambor, yoshlar va bolalarga e’tibor va amaliy g‘amxo‘rlik ko‘rsatish, ularni jismoniy va ma’naviy barkamol etib tarbiyalashga alohida ahamiyat qaratmoqdamiz. Bolalarni kichik yoshdan boshlab rivojlantirish orqali kelajakda ularning o‘zligini to‘la namoyon etishiga mustahkam zamin yaratayapmiz. Zero, bu ezgu maqsadimiz yo‘lida sarflangan investitsiyalar ertaga bir necha barobar ortig‘i bilan qaytishiga shubha yo‘q», – dedi Shavkat Mirziyoyev.</h4>
              Shu bois davlat rahbari bu bo‘g‘inga alohida e’tibor qaratib, barkamol avlodni aynan kichik yoshdan tarbiyalash siyosatini belgilab berdi. O‘zbekiston Prezidentining 2017 yil 30 sentabrdagi farmoniga muvofiq, Maktabgacha ta’lim vazirligi tashkil etildi. Bog‘chalar qurish va ta’mirlash, ilg‘or tarbiya uslublari va metodikalarini joriy etish bo‘yicha ko‘p ishlar boshlandi.
              <br />
              <br />
              Sohani rivojlantirish uchun xususiy sektor kirib kelishiga ham imkoniyat yaratildi. Har bir tarbiyalanuvchi bola uchun davlat budjeti hisobidan subsidiyalar berish yo‘lga qo‘yildi. Olis va chekka hududlarda minglab oilaviy bog‘chalar tashkil qilindi.
              <br />
              <br />
              Natijada so‘nggi yillarda maktabgacha ta’lim muassasalari soni 6 barobarga ko‘paydi. Tarbiyachi va pedagoglar soni ham 3 barobarga o‘sib, 160 mingga yetdi. Shu tariqa, bog‘cha yoshidagi 2 million 800 ming nafar boladan 2 million nafari maktabgacha ta’lim bilan qamrab olindi.

            </p>
          </div>
          <div className='back'>
            <Link href={'/'}>Ortga</Link>
          </div>
          {/* <div className={style.newscard}>
            <p>Yangiliklarni tarmoqlarda ulashing</p>
            <div>

            </div>
          </div> */}

        </div>
        <div className={style.othernews}>
          <h2>Boshqa yangiliklar</h2>
          <OtherNews />
        </div>
      </div>
    </div>
  )
}

export default Newspage