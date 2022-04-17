import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'

const Home: NextPage = () => {
  return (
    <div className="bg-[#121212] font-body">
      <Head>
        <title>Keidy Arrak - Makeup Artist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default Home
