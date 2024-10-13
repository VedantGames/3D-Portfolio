import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [selectedSection, setSelectedSection] = useState('Hero');

  return (
    <div className='z-10 fixed w-full pt-12 flex justify-between'>
      <div className='pl-16'>
        <Link to={'/'} className='font-bold text-5xl text-white cursor-pointer'>
          VG
        </Link>
      </div>
      <div className='md:flex hidden flex-col gap-5 pr-10 w-48'>
        <Link to={'/#Hero'} className={'hover:text-white font-bold text-2xl w-full ' + (selectedSection === 'Hero' ? 'text-white border-r-8 border-[#1689C8]' : 'text-slate-500')} onClick={() => setSelectedSection('Hero')}>
          Hero
        </Link>
        <Link to={'/#Portfolio'} className={'hover:text-white font-bold text-2xl w-full ' + (selectedSection === 'Portfolio' ? 'text-white border-r-8 border-[#1689C8]' : 'text-slate-500')} onClick={() => setSelectedSection('Portfolio')}>
          Portfolio
        </Link>
        <Link to={'/#Experience'} className={'hover:text-white font-bold text-2xl w-full ' + (selectedSection === 'Experience' ? 'text-white border-r-8 border-[#1689C8]' : 'text-slate-500')} onClick={() => setSelectedSection('Experience')}>
          Experience
        </Link>
        <Link to={'/#Contact'} className={'hover:text-white font-bold text-2xl w-full ' + (selectedSection === 'Contact' ? 'text-white border-r-8 border-[#1689C8]' : 'text-slate-500')} onClick={() => setSelectedSection('Contact')}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar