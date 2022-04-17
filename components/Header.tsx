import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 z-40 flex w-full items-center space-x-5 border-b border-[#c4c4c4] bg-[#121212] px-10 py-6 text-[#F7F7F7] ">
      <div className="logo">
        <a href="/" className="mr-20 font-display text-4xl md:text-5xl">
          K.A. Beauty
        </a>
      </div>
      <div className="nav-items space-x-12 text-base font-light">
        <a href="#about">Minust</a>
        <a href="#services">Teenused</a>
        <a href="#gallery">Galerii</a>
        <a href="#contact">Kontakt</a>
      </div>
    </header>
  )
}

export default Header
