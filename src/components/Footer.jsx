import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

function Footer() {
  return (
    <ParallaxLayer offset={5} speed={0.27} className='bg-[#011825] h-full'>
      <div className='bg-[#011825] flex justify-end items-center flex-col size-full z-50 md:mt-36 mt-[70rem]'>
        <div>
          <h1 className='md:text-7xl text-4xl font-bold mb-36'>For BEST Services.</h1>
        </div>
        <div className='flex justify-center items-center flex-col mb-20'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-48">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
          </svg>
          <h2 className='text-5xl font-bold mb-2'>Vedant GUPTA </h2>
          <div className="contact flex justify-center items-center flex-col gap-2">
              <h3 className='text-3xl font-bold text-gray-500'>Full Stack Developer</h3>
              <h4 className='text-2xl'>Get in touch..</h4>
          </div>
          <div className='flex justify-center items-center gap-10 mt-7'>
            <a href='https://www.instagram.com/guptavedant2549/' target='_blank' className='relative size-14 flex justify-center items-center'>
              <IoLogoInstagram className='absolute size-14 hover:size-[4.5rem]' style={{transition: '0.3s'}} color='#046e8f'/> {/*046e8f*/}
            </a>
            <a href='https://github.com/VedantGames' target='_blank' className='relative size-14 flex justify-center items-center'>
              <IoLogoGithub className='absolute size-14 hover:size-[4.5rem]' style={{transition: '0.3s'}} color='#046e8f'/> {/*046e8f*/}
            </a>
            <a href='https://x.com/Vedant_Games' target='_blank' className='relative size-14 flex justify-center items-center'>
              <IoLogoTwitter className='absolute size-14 hover:size-[4.5rem]' style={{transition: '0.3s'}} color='#046e8f'/> {/*046e8f*/}
            </a>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  )
}

export default Footer
