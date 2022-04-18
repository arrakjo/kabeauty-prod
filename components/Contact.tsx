import Image from 'next/image'
import React from 'react'

function Contact() {
  return (
    <div className="flex w-full items-center justify-center bg-[#F7F7F7] py-20">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
        <h2 className="mb-8 font-display text-7xl">Kontakt</h2>
        <p className="mb-10 max-w-[587x]">
          Kui Sa soovid broneerida aega või küsida lisa, võta julgelt ühendust.
        </p>
        <div>
          <a
            href="mailto:keidyarrak@live.com"
            className="mb-6 flex items-center font-light"
          >
            <span className="mr-8">
              <Image
                src="/images/arroba.png"
                alt="Email"
                width={32}
                height={32}
                className="opacity-80 transition duration-150 ease-in-out hover:opacity-100"
              />
            </span>
            keidyarrak@live.com
          </a>
          <a
            href="tel:+37256692189"
            className="mb-6 flex items-center font-light"
          >
            <span className="mr-8">
              <Image
                src="/images/phone.png"
                alt="Phone"
                width={32}
                height={32}
                className="opacity-80 transition duration-150 ease-in-out hover:opacity-100"
              />
            </span>
            +372 5669 2189
          </a>
          <a
            href="https://goo.gl/maps/kHFaSexNFmEePoKX9"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 flex items-center font-light"
          >
            <span className="mr-8">
              <Image
                src="/images/pin.png"
                alt="Email"
                width={32}
                height={32}
                className="opacity-80 transition duration-150 ease-in-out hover:opacity-100"
              />
            </span>
            Ahtri 8, Tallinn
          </a>
        </div>
        <div className="mt-20">
          <p className="mb-10 max-w-[587x]">Leia mind sotsiaalmeedias</p>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/keidyarrak/" target="_blank">
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={32}
                height={32}
                className="opacity-80 transition duration-150 ease-in-out hover:opacity-100"
              />
            </a>
            <a href="https://www.facebook.com/kabeauty.ee" target="_blank">
              <Image
                src="/images/facebook.png"
                alt="Facebppl"
                width={32}
                height={32}
                className="opacity-80 transition duration-150 ease-in-out hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
