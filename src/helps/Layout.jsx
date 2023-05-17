import Footer from '@/component/footer/Footer'
import Navbar from '@/component/navbar/Navbar'
import React from 'react'
import style from './layout.module.css'

const Layout = ( { children } ) => {
  return (
    <div>
      <Navbar/>
      <div className={style.layout}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout