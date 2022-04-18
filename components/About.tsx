import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section
      id="about"
      className="flex w-full items-center justify-center bg-[#F7F7F7] px-5 py-20 md:px-0"
    >
      <div className="flex w-full max-w-screen-xl flex-wrap">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center px-4 py-8 md:w-1/2">
          <div className="block w-full">
            <h2 className="mb-8 font-display text-5xl md:text-7xl">Minust</h2>
            <p className="mb-6 max-w-[528px] text-sm md:text-base">
              The most alluring thing a woman can do is have confidence.
            </p>
            <p className="mb-6 max-w-[528px] text-sm font-light md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vehicula libero turpis, vitae convallis diam vulputate nec. per
              inceptos himenaeos.
            </p>
            <p className="mb-6 max-w-[528px] text-sm font-light md:text-base">
              I will make sure that you walk out of our salon looking great and
              feeling confident as ever.
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center px-6 py-8 md:w-1/2 md:px-4">
          <Image
            src="/images/amazing.png"
            alt="You're amazing"
            width={372}
            height={181}
            className="pointer-events-none"
          />
        </div>
      </div>
    </section>
  )
}

export default About
