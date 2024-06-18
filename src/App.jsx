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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#011825]'>
      <Navbar />
      <div>
        <Parallax pages={6} className='-z-10 text-white relative block bg-[#011825]'>
          <Hero />
          <Portfilio />
          <Contact />
          <Experience />
        </Parallax>
      </div>
    </div>
  )
}

export default App
