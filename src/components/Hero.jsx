import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Mesh from './Mesh'

function Hero() {
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
        <img className='absolute' src="https://raw.githubusercontent.com/ForrestKnight/3d-portfolio/6c6efde636117645d1cd9e7a2a7cfb3ebccd9617/public/parallax/3Mountain.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.1}>
        <img className='absolute' src="https://raw.githubusercontent.com/ForrestKnight/3d-portfolio/6c6efde636117645d1cd9e7a2a7cfb3ebccd9617/public/parallax/4Mountain.svg" alt="" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <div className='size-full flex gap-[30rem] justify-center items-center'>
          <div>
            <div className='text-[180px] leading-[160px] font-bold'>
              <h1>
                Vedant
              </h1>
              <h1>
                Gupta
              </h1>
            </div>
          </div>
          <div className='text-5xl font-bold streaky-glow max-w-96'>
            <h1>
              I only breathe in code, crafting web wonders daily.
            </h1>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.27}>
        <img className='absolute' src="https://raw.githubusercontent.com/ForrestKnight/3d-portfolio/6c6efde636117645d1cd9e7a2a7cfb3ebccd9617/public/parallax/5Crater.svg" alt="" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1}>
        <Canvas className='top-16'>
          <ambientLight intensity={0.5} />
          <Mesh rotation={[0.3, 2.4, 0]} position={[0, -1, 0]} scale={2.2} />
        </Canvas>
      </ParallaxLayer>
    </div>
  )
}

export default Hero
