import { useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { ParallaxLayer } from '@react-spring/parallax';
import CardE from './Experience/CardE';
import { experiences } from './Experience/Data';

function Experience() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const [selectedMenu, setSelectedMenu] = useState(0);

  useEffect(() => {
    if (inView)
      controls.start("show");
  }, [controls, inView]);
  return (
    <div>
      <ParallaxLayer offset={3} speed={0.27} className='bg-[#011825] mt-[40rem]'>
        <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={fadeIn("down", "spring", 0.5, 0.75)}
          >
          <h1 className='text-8xl font-bold mb-20 flex justify-center'>
            Experience
          </h1>
        </motion.div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.27} className='bg-[#011825] mt-[52rem]'>
        <div className='2xl:px-80 xl:px-40 lg:px-32 px-10 pt-10 xl:gap-32 lg:gap-10 flex'>
          <div className='flex flex-col gap-14'>
            {experiences.length > 0 && experiences.map((experience, i) => (
              <div key={i} className={'flex flex-col gap-2 w-96 cursor-pointer ' + (selectedMenu === i ? 'border-l-[1rem] border-[#0d3056] pl-12' : 'pl-16')} onClick={() => setSelectedMenu(i)}>
                <h1 className={'2xl:text-4xl text-3xl font-bold ' + (selectedMenu === i ? 'text-[#1689c8]' : 'text-slate-600')}>{experience.title}</h1>
                <h2 className={'text-xl ' + (selectedMenu !== i && 'text-slate-600')}>{experience.description} | {experience.date}</h2>
              </div>
            ))}
          </div>
          <div>
            <CardE details={experiences[selectedMenu].details}/>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  )
}

export default Experience
