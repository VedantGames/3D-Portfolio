import { ParallaxLayer } from '@react-spring/parallax'
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Title from './Portfolio/Title';
import { fadeIn } from '../utils/motion';
import Card from './Portfolio/Card';
import { Link } from 'react-router-dom';

function Portfilio() {
  const [screen, setScreen] = useState('');
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const handleResize = () => {
    const width = window.innerWidth;

    if (width > 1536) setScreen('2xl')
    else if (width > 1280) setScreen('xl')
    else if (width > 1024) setScreen('lg')
    else if (width > 768) setScreen('md')
    else if (width > 540) setScreen('sm')
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView)
      controls.start("show");
  }, [controls, inView]);

  return (
    <div>
    <ParallaxLayer offset={2} speed={0.27} className='bg-[#011825]'>
      <div></div>
    </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.27} className='bg-[#011825] xl:px-52 md:px-0 sm:px-20 px-8'>
        <div className='md:pt-44'></div>
          <Title />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.27} className='bg-[#011825] xl:px-52 md:px-28 px-10 md:mt-96 mt-64'>
        <Card
          right={true}
          image={'/Portfolio/Portfolio1.png'}
          title={'BabyLang'}
          description={"Babylang is a whimsical toy programming language crafted from JavaScript. This enchanting creation transforms the art of coding into a delightful game, inviting you to explore its playful syntax and imaginative constructs. Babylang is where creativity meets code, turning programming into an adventure filled with curiosity and joy."}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.27} className='bg-[#011825] xl:px-52 md:px-32 px-20 lg:mt-[58rem] mt-[65rem]'>
          <Card 
            right={false}
            image={'/Portfolio/Vtube-homepage.png'}
            title={'VTube - A YouTube clone'}
            description={"Where coding brilliance meets video streaming, this YouTube clone offers a sleek, responsive design and seamless functionality, bringing my vision of modern media to life."}
          />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.27} className='bg-[#011825] xl:px-52 md:px-32 px-10 lg:mt-[100rem] md:mt-[115rem] mt-[122rem]'>
          <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={fadeIn("up", "spring", 0.5, 0.75)}
          >
            <Link to={'https://virbnb.vercel.app'} target='_blank' className='flex justify-between w-full h-full xl:gap-20 gap-10 mb-16 md:mt-0 mt-10 lg:flex-row flex-col-reverse'>
              <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={fadeIn("left", "spring", 0.5, 0.75)}
              >
                <div className='flex flex-col gap-5 justify-center'>
                  <h1 className='xl:text-5xl text-4xl font-bold md:pl-0 px-2'>
                    Virbnb - An Airbnb clone
                  </h1>
                  <h2 className='xl:text-2xl text-lg md:pl-0 px-5 line-clamp-[10]'>
                    Step into a world of digital hospitality with this Airbnb clone, crafted by Vedant Gupta. Seamlessly designed and fully functional, Virbnb redefines the vacation rental experience with a touch of innovation and user-centric elegance.
                  </h2>
                </div>
              </motion.div>
              <div>
                <img src="/Portfolio/Virbnb-homepage.png" className='object-fill w-[250rem] rounded-3xl'/>
              </div>
            </Link>
          </motion.div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.27} className='bg-[#011825] xl:px-52 md:px-32 px-10 lg:mt-[135rem] md:mt-[148rem] mt-[162rem]'>
          <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={fadeIn("up", "spring", 0.5, 0.75)}
          >
            <Link to={'http://portfolio-vedant.vercel.app'} target='_blank' className='flex lg:flex-row flex-col justify-between w-full h-full xl:gap-20 gap-10 mb-16'>
              <div>
                <img src="/Portfolio/Portfolio2.png" className='object-fill md:w-[300rem] w-[400rem] rounded-3xl'/>
              </div>
              <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={fadeIn("right", "spring", 0.5, 0.75)}
              >
                <div className='flex flex-col gap-5 justify-center'>
                  <h1 className='xl:text-5xl text-4xl font-bold md:pl-0 px-2'>
                    Portfolio
                  </h1>
                  <h2 className='xl:text-2xl text-lg md:pl-0 px-5'>
                    Embark on a digital odyssey through my portfolio, a fusion of innovation and design. Explore curated projects that reflect my passion for creative excellence and technological prowess. Join me in a journey where pixels and code converge to craft immersive digital experiences.
                  </h2>
                </div>
              </motion.div>
            </Link>
          </motion.div>
      </ParallaxLayer>
    </div>
  )
}

export default Portfilio
