import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import Hero from './components/Hero'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Portfilio from './components/Portfilio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import useMousePosition from './hooks/useMousePosition'
import { useSpring } from 'framer-motion'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const mousePostion = useMousePosition();

  return (
    <div className='bg-[#011825]'>
      <div>
        <Navbar />
        <div>
          <Parallax pages={7} className='-z-10 text-white relative block bg-[#011825]'>
            <Hero />
            <Portfilio />
            <Footer />
            <Contact />
            <Experience />
            <div className='absolute z-50' style={{top: mousePostion.y, left: mousePostion.x}}>
              <div className='flex justify-center items-center relative'>
                <div className={'absolute bg-white rounded-full size-1.5'} ></div>
                <div className='absolute flex items-center justify-center -top-10 -left-10'>
                  <div className='relative'>
                    <div className={'absolute size-20 border rounded-full'} style={{top: mousePostion.springX, left: mousePostion.springY}}>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <ParallaxLayer offset={6} speed={0.27} className='md:bg-transparent bg-[#011825] h-0 md:block hidden'>
              <div className='flex justify-center items-end h-full w-full'>
                <h1 className='text-9xl font-bold mb-20'>
                  Thank You.
                </h1>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </div>
  )
}

export default App
