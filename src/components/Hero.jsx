import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import Mesh from './Mesh'

function Hero() {
  const [screen, setScreen] = useState('');

  const handleResize = () => {
    const width = window.innerWidth;

    if (width > 1536) setScreen('2xl')
    else if (width > 1280) setScreen('xl')
    else if (width > 1024) setScreen('lg')
    else if (width > 768) setScreen('md')
    else if (width > 540) setScreen('sm')

    console.log(screen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <ParallaxLayer offset={0} speed={0}>
        <img className='absolute' src='https://raw.githubusercontent.com/ForrestKnight/3d-portfolio/6c6efde636117645d1cd9e7a2a7cfb3ebccd9617/public/parallax/1Stars.svg' alt='' />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.25}>
        <img className='absolute' src="https://raw.githubusercontent.com/ForrestKnight/3d-portfolio/6c6efde636117645d1cd9e7a2a7cfb3ebccd9617/public/parallax/2Planets.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <img className='absolute' src="https://raw.githubusercontent.com/ForrestKnight/3d-portfolio/6c6efde636117645d1cd9e7a2a7cfb3ebccd9617/public/parallax/6Sun.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.5}>
        <img className='absolute xl:mt-0 lg:mt-20 mt-40' src="https://raw.githubusercontent.com/ForrestKnight/3d-portfolio/6c6efde636117645d1cd9e7a2a7cfb3ebccd9617/public/parallax/3Mountain.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.1}>
        <img className='absolute xl:mt-0 lg:mt-20 mt-40' src="https://raw.githubusercontent.com/ForrestKnight/3d-portfolio/6c6efde636117645d1cd9e7a2a7cfb3ebccd9617/public/parallax/4Mountain.svg" alt="" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <div className='size-full flex 2xl:gap-[30rem] xl:gap-80 gap-32 justify-center items-center'>
          <div>
            <div className='2xl:text-[180px] xl:text-9xl text-8xl 2xl:leading-[160px] xl:pl-0 pl-32 font-bold'>
              <h1>
                Vedant
              </h1>
              <h1>
                Gupta
              </h1>
            </div>
          </div>
          <div className='lg:text-5xl text-4xl font-bold streaky-glow xl:max-w-96 xl:pl-0 lg:pl-32 '>
            <h1>
              I only breathe in code, crafting web wonders daily.
            </h1>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.27}>
        <div className='h-[100rem] flex flex-col xl:mt-0 lg:mt-20 mt-40'>
          <div className='h-max'>
            <img src="https://raw.githubusercontent.com/ForrestKnight/3d-portfolio/6c6efde636117645d1cd9e7a2a7cfb3ebccd9617/public/parallax/5Crater.svg" alt="" />
          </div>
          <div className='bg-[#011825] w-full h-[100rem]'></div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.27}>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1}>
        <Canvas className='top-16'>
          <ambientLight intensity={0.5} />
          <Mesh rotation={[0.3, 2.4, 0]} position={[0, -1, 0]} scale={(screen == '2xl' ? 2.2 : (screen == 'xl' ? 2 : 1.8))} />
        </Canvas>
      </ParallaxLayer>
    </div>
  )
}

export default Hero
