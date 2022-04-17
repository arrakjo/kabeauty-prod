import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <main className="flex h-screen w-full bg-[#121212] text-[#F7F7F7] ">
      <div className="flex w-1/2 flex-col items-center justify-center px-24 pb-10">
        <h3 className="mb-5 text-xl font-extralight text-[#C4C4C4] ">
          Makeup Artist
        </h3>
        <h1 className="mb-20 font-display text-8xl">Keidy Arrak</h1>
        <p className="w-2/3 text-center text-base font-extralight text-[#ECECEC]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vehicula libero turpis, vitae convallis diam vulputate nec. per
          inceptos himenaeos.
        </p>
      </div>

      <div className="flex w-1/2 items-center justify-center pb-10">
        <Image
          src="/images/Keidy.png"
          alt="Keidy Arrak"
          width={568}
          height={568}
        />
      </div>
    </main>
  )
}

export default Hero
