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
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const [mobile] = useMatchMedia(queries)

  return (
    <div className={style.navbar}>
      <div className={style.nav}>
      <div className={style.brand}>
        <Link href={'/'}>
          <Image src={brand} alt='brand' />
        </Link>
      </div>
      <div className={style.navItem}>
        {domLoaded && (
          <>
        {mobile ? <DrawerBarkamol /> : 
        <div className={style.navItems}>  
          <div style={{cursor: 'pointer'}}>
            <Maktab />
          </div>
          <div style={{cursor: 'pointer'}}>
            <HujjatlarNavbar />
          </div>
          <div style={{cursor: 'pointer'}}>
            <Talim />
          </div>
          <div style={{cursor: 'pointer'}}>
            <Faoliyat />
          </div>
          <div style={{cursor: 'pointer'}}>
            <Axborot />
          </div>
        </div>
        }
        </>
        )}
      </div>
      </div>
      </div>
  )
}

export default Navbar