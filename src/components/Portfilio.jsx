import { ParallaxLayer } from '@react-spring/parallax'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Title from './Portfolio/Title';
import { fadeIn } from '../utils/motion';
import Card from './Portfolio/Card';

function Portfilio() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView)
      controls.start("show");
  }, [controls, inView]);

  return (
    <div>
    <ParallaxLayer offset={2} speed={0.27} className='bg-[#011825]'>
      <div></div>
    </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.27} className='bg-[#011825] px-52'>
        <div className='pt-44'></div>
          <Title />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.27} className='bg-[#011825] px-52 mt-96'>
        <Card
          right={true}
          image={'/Portfolio/Portfolio1.png'}
          title={'3D Portfolio'}
          description={'Dive into my portfolio website, where the parallax effect brings depth to my digital showcase and a stunning 3D model stands as a testament to my innovative spirit. Explore a blend of artistry and technology, where each scroll reveals layers of my creative journey.'}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.27} className='bg-[#011825] px-52 mt-[58rem]'>
          <Card 
            right={false}
            image={'/Portfolio/Vtube-homepage.png'}
            title={'VTube - A YouTube clone'}
            description={"Where coding brilliance meets video streaming, this YouTube clone offers a sleek, responsive design and seamless functionality, bringing Vedant Gupta's vision of modern media to life."}
          />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.27} className='bg-[#011825] px-52 mt-[100rem]'>
          <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={fadeIn("up", "spring", 0.5, 0.75)}
          >
            <div className='flex justify-between w-full h-full gap-20 mb-16'>
              <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={fadeIn("left", "spring", 0.5, 0.75)}
              >
                <div className='flex flex-col gap-5 justify-center'>
                  <h1 className='text-5xl font-bold'>
                    Virbnb - An Airbnb clone
                  </h1>
                  <h2 className='text-2xl'>
                    Step into a world of digital hospitality with this Airbnb clone, crafted by Vedant Gupta. Seamlessly designed and fully functional, Virbnb redefines the vacation rental experience with a touch of innovation and user-centric elegance.
                  </h2>
                </div>
              </motion.div>
              <div>
                <img src="/Portfolio/Virbnb-homepage.png" className='object-fill w-[250rem] rounded-3xl'/>
              </div>
            </div>
          </motion.div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.27} className='bg-[#011825] px-52 mt-[135rem]'>
          <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={fadeIn("up", "spring", 0.5, 0.75)}
          >
            <div className='flex justify-between w-full h-full gap-20 mb-16'>
              <div>
                <img src="/Portfolio/Portfolio2.png" className='object-fill w-[300rem] rounded-3xl'/>
              </div>
              <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={fadeIn("right", "spring", 0.5, 0.75)}
              >
                <div className='flex flex-col gap-5 justify-center'>
                  <h1 className='text-5xl font-bold'>
                    Portfolio
                  </h1>
                  <h2 className='text-2xl'>
                    Embark on a digital odyssey through my portfolio, a fusion of innovation and design. Explore curated projects that reflect my passion for creative excellence and technological prowess. Join me in a journey where pixels and code converge to craft immersive digital experiences.
                  </h2>
                </div>
              </motion.div>
            </div>
          </motion.div>
      </ParallaxLayer>
    </div>
  )
}

export default Portfilio
