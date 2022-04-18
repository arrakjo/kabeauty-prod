import React, { useState } from 'react'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-between space-x-5 border-b border-[#c4c4c4] bg-[#121212] px-6 py-6 text-[#F7F7F7] lg:px-40 ">
      <div className="logo">
        <a href="/" className="mr-20 font-display text-3xl md:text-5xl">
          K.A. Beauty
        </a>
      </div>
      <div className="hidden space-x-12 text-base font-light md:inline">
        <a href="#about">Minust</a>
        <a href="#services">Teenused</a>
        <a href="#contact">Kontakt</a>
        <a href="/gallery">Galerii</a>
      </div>
      <div className="inline md:hidden">
        <button onClick={openMenu}>
          <MenuAlt3Icon className="h-8" />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-0 right-0 z-50 h-screen w-80 bg-[#232323]">
          <div className="flex w-full justify-end py-6 px-6">
            <button onClick={closeMenu}>
              <XIcon className="h-8" />
            </button>
          </div>
          <div className="flex h-2/3 flex-col items-center justify-center space-y-4 text-xl font-light">
            <a href="#about">Minust</a>
            <a href="#services">Teenused</a>
            <a href="#contact">Kontakt</a>
            <a href="/gallery">Galerii</a>
          </div>
        </div>
      )}

      {menuOpen && (
        <div
          onClick={closeMenu}
          className="absolute top-0 right-0 h-screen w-screen bg-black opacity-40"
        />
      )}
    </header>
  )
}

export default Header
