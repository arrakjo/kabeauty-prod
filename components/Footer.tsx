import React from 'react'

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-[#F7F7F7] p-5 md:items-end">
      <p className="font-light">&copy; Keidy Arrak 2022</p>
      <a
        href="https://www.arrak.dev/?from=kabeauty"
        target="_blank"
        rel="author"
        className="mt-2 text-sm font-light text-slate-500"
      >
        Disain &#38; ehitus: Joosep Arrak
      </a>
    </footer>
  )
}

export default Footer
