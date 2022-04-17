import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section id="about" className="flex w-full bg-[#F7F7F7] py-24 md:px-36 ">
      <div className="align-center flex w-full flex-col justify-center px-36 md:w-2/3">
        <h2 className="mb-8 font-display text-7xl">Minust</h2>
        <p className="mb-6 max-w-[528px]">
          The most alluring thing a woman can do is have confidence.
        </p>
        <p className="mb-6 max-w-[528px] font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vehicula libero turpis, vitae convallis diam vulputate nec. per
          inceptos himenaeos.
        </p>
        <p className="mb-6 max-w-[528px] font-light">
          I will make sure that you walk out of our salon looking great and
          feeling confident as ever.
        </p>
      </div>
      <div className="pointer-events-none mr-0 grid w-full place-items-center md:mr-10 md:w-1/3">
        <Image
          src="/images/amazing.png"
          alt="You're amazing"
          width={372}
          height={181}
        />
      </div>
    </section>
  )
}

export default About
