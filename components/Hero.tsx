import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <main
      id="home"
      className="flex w-full flex-wrap bg-[#121212] py-16 text-[#F7F7F7] xl:py-36 "
    >
      <div className="flex w-full flex-col items-center justify-center px-24 xl:w-1/2">
        <h3 className="mb-5 text-lg font-extralight text-[#C4C4C4] md:text-xl ">
          Makeup Artist
        </h3>
        <h1 className="mb-10 font-display text-5xl md:mb-16 md:text-8xl">
          Keidy Arrak
        </h1>
        <p className="w-full text-center text-sm font-extralight text-[#ECECEC] md:w-2/3 md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vehicula libero turpis, vitae convallis diam vulputate nec. per
          inceptos himenaeos.
        </p>
      </div>

      <div className="flex w-full items-center justify-center py-10 px-5 xl:w-1/2 xl:py-0">
        <Image
          src="/images/Keidy.png"
          alt="Keidy Arrak"
          width={568}
          height={568}
          className="pointer-events-none"
        />
      </div>
    </main>
  )
}

export default Hero
