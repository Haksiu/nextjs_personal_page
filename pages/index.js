import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Haksiu - Portfolio</title>
        <meta name="description" content="Haksiu - Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Contact />
    <Footer />
    </div>
  )
}
