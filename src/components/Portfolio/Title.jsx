import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

function Title() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView)
      controls.start("show");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={fadeIn("down", "spring", 0.5, 0.75)}
    >
      <div>
        <h1 className='md:text-8xl text-6xl md:px-24 font-bold mb-20'>
          Projects
        </h1>
      </div>
    </motion.div>
  )
}

export default Title
