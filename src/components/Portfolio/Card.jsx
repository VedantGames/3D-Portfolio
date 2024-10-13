import { useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import Macbook from './Macbook';
import { Canvas } from '@react-three/fiber';
import IPhone from './IPhone/IPhone'
import Portfolio from './Mac/Portfolio1'
import { Link } from 'react-router-dom';

function LeftCard({ image, title, description, ref1, controls }) {
  const x = useMotionValue(0);
  const [tx, setTx] = useState(0);
  const y = useMotionValue(0);
  
  // const xSpring = useSpring(x);
  // const ySpring = useSpring(y);
  
  const xRotation = useTransform(
    y,
    [-0.5, 0, 0.5],
    [-0.5, 0, 1]
  );
  const yRotation = useTransform(
    x,
    [-0.5, 0.5],
    [0.5, -0.5]
  );
  
  const [screen, setScreen] = useState('');

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
  
  const handelMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handelMoudeLeave = () => {
    x.set(0);
    y.set(0);
  }
  
  useEffect(() => {
    xRotation.on("change", (value) => {
      setTx(value);
    })
    yRotation.on("change", (value) => {
      setTx(value);
    })
  }, [xRotation, yRotation])

  return (
    <motion.div
      ref={ref1}
      animate={controls}
      initial='hidden'
      variants={fadeIn("up", "spring", 0.5, 0.75)}
    >
      <div className='lg:grid lg:grid-cols-2 flex flex-col items-center w-full h-full sm:gap-20 mb-16 '>
        <Link 
          to={'https://vtube-vedant.vercel.app'}
          target='_blank'
          id='card'
          style={{
            transformStyle: "preserve-3d",
          }}
          className='w-full 2xl:ml-0 -ml-32'
        >
          {/* <img src={image} className='object-fill w-[300rem] rounded-3xl'/> */}
          <Canvas camera={{fov: 60, position: [0, 0, 10]}} className='' style={{height: "50rem", width: (window.innerWidth > 1500 ? "40rem" : "30rem"), marginTop: '-5rem', marginLeft: window.innerWidth > 370 ? '0rem' : '-2.5rem'}} onMouseMove={handelMouseMove} onMouseLeave={handelMoudeLeave}>
            <ambientLight intensity={0} />
            {/* <spotLight position={[0, 5, 0]} intensity={0}/>ds */}
            <pointLight position={[2, 5, 0]} intensity={30}/>
            <IPhone position={[0, 1.5, -2]} rotation={[1.57+xRotation.get(), 0, 0+yRotation.get()]} scale={8} />
          </Canvas> 
        </Link>
        <motion.div
          ref={ref1}
          animate={controls}
          initial='hidden'
          variants={fadeIn("right", "spring", 0.5, 0.75)}
        >
          <div className='flex flex-col gap-5 justify-center lg:-mt-52 md:-mt-80 sm:mt-0 -mt-52'>
            <h1 className='sm:text-5xl text-3xl font-bold'>
              {title}
            </h1>
            <h2 className='text-2xl sm:px-0 pl-3 sm:line-clamp-none line-clamp-[8]'>
            {description}
            </h2>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
};

function RightCard({ image, title, description, ref1, controls }) {
  const x = useMotionValue(0);
  const [tx, setTx] = useState(0);
  const y = useMotionValue(0);
  
  // const xSpring = useSpring(x);
  // const ySpring = useSpring(y);
  
  const xRotation = useTransform(
    y,
    [-0.5, 0, 0.5],
    [-0.5, 0, 1]
  );
  const yRotation = useTransform(
    x,
    [-0.5, 0.5],
    [-0.5, 0.5]
  );

  const [screen, setScreen] = useState('');

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
  
  const handelMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    // console.log(Number(xRotation.get().slice(0, xRotation.get().length-3)), typeof(Number(xRotation.get().slice(0, xRotation.get().length-3))+10))
    // console.log(x.get(), y.get(), xSpring.get(), ySpring.get(), xRotation.get(), yRotation.get())
    // console.log(xRotation)
  };

  const handelMoudeLeave = () => {
    x.set(0);
    y.set(0);
  }
  
  useEffect(() => {
    xRotation.on("change", (value) => {
      setTx(value);
    })
    yRotation.on("change", (value) => {
      setTx(value);
    })
  }, [xRotation, yRotation])

  return (
    <motion.div
      ref={ref1}
      animate={controls}
      initial='hidden'
      variants={fadeIn("up", "spring", 0.5, 0.75)}
    >
      <div className='flex justify-between w-full h-full 2xl:gap-20 mb-16 lg:flex-row flex-col-reverse'>
        <motion.div
          ref={ref1}
          animate={controls}
          initial='hidden'
          variants={fadeIn("right", "spring", 0.5, 0.75)}
        >
          <div className='flex flex-col gap-5 justify-center lg:-mt-14 md:-mt-80 sm:mt-0 -mt-24'>
            <h1 className='md:text-5xl text-4xl font-bold'>
              {title}
            </h1>
            <h2 className='text-2xl sm:px-0 px-5 line-clamp-[16]'>
            {description}
            </h2>
          </div>
        </motion.div>
        <Link to={'https://babylang.vercel.app'} target='_blank' id='card' style={{ transformStyle: "preserve-3d" }}>
          {/* <img src={image} className='object-fill w-[300rem] rounded-3xl'/> */}
          <Canvas camera={{fov: 60, position: [0, 0, 10]}} className='lg:-mt-32 md:-mt-40 -mt-28' style={{height: window.innerWidth > 750 ? "50rem" : '20rem', width: (window.outerWidth > 1500 ? "40rem" : (window.innerWidth > 750 ? "30rem" : '22rem')), marginLeft: window.innerWidth > 370 ? '0rem' : '-3rem'}} onMouseMove={handelMouseMove} onMouseLeave={handelMoudeLeave}>
            <ambientLight intensity={0} />
            {/* <spotLight position={[0, 5, 0]} intensity={0}/> */}
            <pointLight position={[2, 5, 0]} intensity={30}/>
            <Portfolio position={[0, 0, window.innerWidth > 750 ? -2 : 0]} rotation={[0.1+xRotation.get(), 1.57+yRotation.get(), 0.12]} scale={(window.innerWidth > 1500 ? 20 : window.innerWidth > 1000 ? 18 : window.innerWidth > 640 ? 16 : 25)} />
          </Canvas>
        </Link>
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
