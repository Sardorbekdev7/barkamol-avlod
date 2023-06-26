import React from 'react'
import style from './style/course.module.css'
import Link from 'next/link'
import OtherNews from '@/component/news/newspage/OtherNews'
import Links from '@/component/news/newspage/Links'
import { Button } from 'antd'
import { course } from '@/data/data'

const Course = ( {data} ) => {

  return (
      <div className={style.container}>
      <div className={style.newspages}>
        <div className={style.newspage}>
          <div>
            <p><Link href={'/'}>Axborot xizmati</Link> {`>`} <Link href={'/talim-yonalishlari/'}>Ma`daniyat va Sa`nat</Link>{` > `}<Link href={'/talim-yonalishlari/madaniyat-sanat/'}>{data.title}</Link></p> 
          </div>
          <h1>{data.title}</h1>
          <img src={data.images.image_1} alt='' />
          <div className={style.newspagetext}>
            <p>
            Toshkent shahrida kichik yoshdagi bolalarni tarbiyalash va ularga ta’lim berish masalalari bo‘yicha jahon konferensiyasi bo‘lib o‘tdi. 15 noyabr kuni bu anjumanga O‘zbekiston prezidenti Shavkat Mirziyoyev tashrif buyurdi.
            <br />
            <br />
            Konferensiya dunyoda 2030 yilga qadar maktabgacha ta’lim sohasiga oid siyosatni belgilab olish va bu boradagi xalqaro hamkorlikni kengaytirishga qaratilgan. Unda YuNeSKO Bosh direktori Odri Azule, 150 ga yaqin mamlakatdan vazirlar va vakillar, xalqaro tashkilotlar mutasaddilari qatnashmoqda.
            <br />
            <br />
            Davlat rahbari nutqining avvalida soha bo‘yicha dunyodagi vaziyatga to‘xtalib, millionlab bolalarning boshlang‘ich bilim olish imkoniyati cheklangani, mutaxassislar birgalashib, maktabgacha ta’lim qamrovini oshirishi muhimligini aytdi. O‘zbekistonda «inson qadri, uning huquq va manfaatlari – oliy qadriyat» degan tamoyil asosida aholi uchun munosib turmush sharoitlari yaratilayotgani ta’kidlandi.
            </p>
          </div>
          <img src={data.images.image_2} alt="" />
          <div className={style.newspagetext}>
            <p>
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

        </div>
        <div className={style.othernews}>
          <h2>Boshqa to’garaklar</h2>
          <div className={style.change_course}>
            {
              course.map((item, key) => 
                (
                  <>
                    <Button key={key}>{item.title}</Button>
                  </>
                )
              )
            }
          </div>
        </div>
      </div>
          <Links />
    </div>
  )
}

export default Course