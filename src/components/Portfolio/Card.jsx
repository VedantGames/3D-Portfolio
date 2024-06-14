import { useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import Macbook from './Macbook';
import { Canvas } from '@react-three/fiber';
import IPhone from './IPhone/IPhone'
import Portfolio from './Mac/Portfolio1'

function LeftCard({ image, title, description, ref1, controls }) {
  const x = useMotionValue(0);
  const [tx, setTx] = useState(0);
  const y = useMotionValue(0);
  
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  
  const xRotation = useTransform(
    ySpring,
    [-0.5, 0, 0.5],
    [-0.5, 0, 1]
  );
  const yRotation = useTransform(
    xSpring,
    [-0.5, 0.5],
    [0.5, -0.5]
  );
  
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
      <div className='flex justify-between w-full h-full gap-20 mb-16'>
        <div
          id='card'
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* <img src={image} className='object-fill w-[300rem] rounded-3xl'/> */}
          <Canvas camera={{fov: 60, position: [0, 0, 10]}} style={{height: "50rem", width: "50rem", marginTop: '-5rem'}} onMouseMove={handelMouseMove} onMouseLeave={handelMoudeLeave}>
            <ambientLight intensity={0} />
            {/* <spotLight position={[0, 5, 0]} intensity={0}/> */}
            <pointLight position={[2, 5, 0]} intensity={30}/>
            <IPhone position={[0, 1.5, -2]} rotation={[1.57+xRotation.get(), 0, 0+yRotation.get()]} scale={8} />
          </Canvas>
        </div>
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
      </div>
    </motion.div>
  )
};

function RightCard({ image, title, description, ref1, controls }) {
  const x = useMotionValue(0);
  const [tx, setTx] = useState(0);
  const y = useMotionValue(0);
  
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  
  const xRotation = useTransform(
    ySpring,
    [-0.5, 0, 0.5],
    [-0.5, 0, 1]
  );
  const yRotation = useTransform(
    xSpring,
    [-0.5, 0.5],
    [-0.5, 0.5]
  );
  
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
        <div id='card' style={{ transformStyle: "preserve-3d" }}>
          {/* <img src={image} className='object-fill w-[300rem] rounded-3xl'/> */}
          <Canvas camera={{fov: 60, position: [0, 0, 10]}} style={{height: "50rem", width: "50rem", marginTop: '-5rem'}} onMouseMove={handelMouseMove} onMouseLeave={handelMoudeLeave}>
            <ambientLight intensity={0} />
            {/* <spotLight position={[0, 5, 0]} intensity={0}/> */}
            <pointLight position={[2, 5, 0]} intensity={30}/>
            <Portfolio position={[0, 0, -2]} rotation={[0.1+xRotation.get(), 1.57+yRotation.get(), 0.12]} scale={20} />
          </Canvas>
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
