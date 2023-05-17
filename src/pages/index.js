import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/helps/Layout';
import HomeHeader from '@/component/homeheader/HomeHeader';
import Navbar from '@/component/navbar/Navbar';
import Footer from '@/component/footer/Footer';
import Courses from '@/component/course/Courses';
import News from '@/component/news/News';
import Stat from '@/component/stat/Stat';
import Sponsor from '@/component/sponsors/Sponsor';
import Head from 'next/head';
import SEO from '@/helps/SEO/SEO';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <SEO metaTitle="Barkamol Avlod Bolalar maktabi">
      <Navbar />
        <HomeHeader />
        <Courses />
        <News />
        <Stat />
        <Sponsor />
      <Footer />
    </SEO>
  )
}
