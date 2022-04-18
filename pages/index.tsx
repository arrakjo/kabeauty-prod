import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'

let pageTitle = 'Keidy Arrak - Makeup Artist'
let description = 'Makeup Artist Keidy Arrak - K.A. Beauty'
let currentURL = 'https://kabeauty.vercel.app/'
let siteName = 'MUA Keidy Arrak'
let previewImage = 'https://kabeauty.vercel.app/images/socialcardlarge.png'

const Home: NextPage = () => {
  return (
    <div className="bg-[#121212] font-body">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={previewImage} />
      </Head>

      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
