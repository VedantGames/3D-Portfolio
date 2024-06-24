import { useMotion } from '@react-three/drei';
import { useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 1000,
    y: 1000,
    springX: null,
    springY: null,
  });

  const motionX = useMotionValue(mousePosition.x);
  const motionY = useMotionValue(mousePosition.y);
  
  const springX = useSpring(motionX);
  const springY = useSpring(motionY);

  const updateMousePosition = ev => {
    setMousePosition({
      x: ev.clientX,
      y: ev.clientY,
      springX: springX,
      springY: springY,
    });
  };
  useEffect(() => {

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;