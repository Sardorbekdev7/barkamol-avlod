import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import brand from '../../../public/navbar/brand.svg'
import { Container } from 'react-bootstrap'
import style from './navbar.module.css'
import DrawerBarkamol from './Drawer'
import useMatchMedia from 'use-match-media-hook'
import dynamic from 'next/dynamic'
import Maktab from './dropdown/Maktab'
import HujjatlarNavbar from './dropdown/Hujjatlar'
import Talim from './dropdown/Talim'
import Faoliyat from './dropdown/Faoliyat'
import Axborot from './dropdown/Axborot'
import Link from 'next/link'

const queries = [
  '(max-width: 1024px)',
]

const Navbar = () => {
  
  // const [windowSize, setWindowSize] = useState();
  
  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleWindowResize);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // });


  // console.log(windowSize)

  const [mobile] = useMatchMedia(queries)

  return (
    <div className={style.navbar}>
    <>
      <div className={style.nav}>
      <div className={style.brand}>
        <Link href={'/'}>
          <Image src={brand} alt='brand' />
        </Link>
      </div>
      <div className={style.navItem}>
        {mobile ? <DrawerBarkamol/> : 
        <div className={style.navItems}>  
          <div>
            <Maktab />
          </div>
          <div>
            <HujjatlarNavbar />
          </div>
          <div>
            <Talim />
          </div>
          <div>
            <Faoliyat />
          </div>
          <div>
            <Axborot />
          </div>
        </div>
        }
      </div>
      </div>
    </>
      </div>
  )
}

export default Navbar