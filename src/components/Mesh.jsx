import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react'
import Model from '../assets/Model/Scene';
// import scaceman from "../assets/Model/spaceman.glb"

function Mesh(props) {
  return (
    <Model {...props} />
  )
}

export default Mesh
