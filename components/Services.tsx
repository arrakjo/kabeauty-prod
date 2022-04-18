import Image from 'next/image'
import React from 'react'
import Service from './Service'

function Services() {
  return (
    <div id="services" className="bg-[#AB9FA1]">
      <div className="mx-auto flex flex-wrap justify-center ">
        <Service title="Jumestus" src="/images/Jumestus.png" />
        <Service title="Juuksed" src="/images/Juuksed.png" />
        <Service title="Pruudimeik" src="/images/Pruudimeik.png" />
      </div>
    </div>
  )
}

export default Services
