import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

function LeftCard({ image, title, description, ref1, controls }) {
  return (
    <motion.div
      ref={ref1}
      animate={controls}
      initial='hidden'
      variants={fadeIn("up", "spring", 0.5, 0.75)}
    >
      <div className='flex justify-between w-full h-full gap-20 mb-16'>
        <div>
          <img src={image} className='object-fill w-[200rem] rounded-3xl'/>
        </div>
        <motion.div
          ref={ref1}
          animate={controls}
          initial='hidden'
          variants={fadeIn("left", "spring", 0.5, 0.75)}
        >
          <div className='flex flex-col gap-5 justify-center'>
            <h1 className='text-5xl font-bold'>
              {title}
            </h1>
            <h2 className='text-2xl'>
            {description}
            </h2>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
};

function RightCard({ image, title, description, ref1, controls }) {
  return (
    <motion.div
      ref={ref1}
      animate={controls}
      initial='hidden'
      variants={fadeIn("up", "spring", 0.5, 0.75)}
    >
      <div className='flex justify-between w-full h-full gap-20 mb-16'>
        <motion.div
          ref={ref1}
          animate={controls}
          initial='hidden'
          variants={fadeIn("right", "spring", 0.5, 0.75)}
        >
          <div className='flex flex-col gap-5 justify-center'>
            <h1 className='text-5xl font-bold'>
              {title}
            </h1>
            <h2 className='text-2xl'>
            {description}
            </h2>
          </div>
        </motion.div>
        <div>
          <img src={image} className='object-fill w-[300rem] rounded-3xl'/>
        </div>
      </div>
    </motion.div>
  )
};

function Card({ right, image, title, description }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView)
      controls.start("show");
  }, [controls, inView]);

  return (
    <div>
      {right ? (
        <RightCard image={image} title={title} description={description} ref1={ref} controls={controls} />
      ) : (
        <LeftCard image={image} title={title} description={description} ref1={ref} controls={controls} />
      )}
    </div>
  )
}

export default Card
