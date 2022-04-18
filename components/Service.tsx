import Image from 'next/image'
import React from 'react'

function Service({ title, src }: { title: string; src: string }) {
  return (
    <div className="relative z-20 mx-0 flex w-max items-center justify-center">
      <Image
        src={src}
        alt={title}
        width={505}
        height={354}
        className="pointer-events-none"
      />
      <h1 className="absolute z-30 font-service text-3xl uppercase text-[#F7F7F7] md:text-5xl ">
        {title}
      </h1>
    </div>
  )
}

export default Service
