/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 .\IPhone.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Models/IPhone/IPhone.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0.5]}>
        <mesh geometry={nodes.Plane007.geometry} material={materials.BodyFrame} />
        <mesh geometry={nodes.Plane007_1.geometry} material={materials.GrayGlossy2} />
        <mesh geometry={nodes.Plane007_2.geometry} material={materials['Microphone/Speaker']} />
        <mesh geometry={nodes.Plane007_3.geometry} material={materials.Antenna} />
        <mesh geometry={nodes.iPhone12_Pro.geometry} material={materials.Body}>
          <mesh geometry={nodes.Apple_Logo.geometry} material={materials.Logo} />
          <mesh geometry={nodes.Bezel.geometry} material={materials.bezel}>
            <mesh geometry={nodes.FrontCamera001.geometry} material={materials['bezel.001']} position={[0, -0.001, 0]} />
            <mesh geometry={nodes.Sphere.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Sphere_1.geometry} material={materials.FrontCamera} />
            <mesh geometry={nodes.Sphere_2.geometry} material={materials.Cameralens} />
            <mesh geometry={nodes.Sphere002.geometry} material={materials.GrayGlossy2} />
            <mesh geometry={nodes.Sphere002_1.geometry} material={materials['Microphone/Speaker']} />
          </mesh>
          <mesh geometry={nodes.CameraModule001.geometry} material={materials.Glass} />
          <mesh geometry={nodes.CameraModule002.geometry} material={materials['Microphone/Speaker']} />
          <mesh geometry={nodes.LiDar.geometry} material={materials['LiDar ']} />
          <mesh geometry={nodes.Screen.geometry} material={materials.Wallpaper} />
          <mesh geometry={nodes.Circle.geometry} material={materials.PacificBlue} />
          <mesh geometry={nodes.Circle_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Circle_2.geometry} material={materials.GrayGlossy} />
          <mesh geometry={nodes.Circle_3.geometry} material={materials.Blackmatte} />
          <mesh geometry={nodes.Circle_4.geometry} material={materials.FrontCamera} />
          <mesh geometry={nodes.Circle_5.geometry} material={materials.Cameralens} />
          <mesh geometry={nodes.Circle005.geometry} material={materials.PacificBlue} />
          <mesh geometry={nodes.Circle005_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Circle005_2.geometry} material={materials.GrayGlossy} />
          <mesh geometry={nodes.Circle005_3.geometry} material={materials.Blackmatte} />
          <mesh geometry={nodes.Circle005_4.geometry} material={materials.FrontCamera} />
          <mesh geometry={nodes.Circle005_5.geometry} material={materials.Cameralens} />
          <mesh geometry={nodes.Circle003.geometry} material={materials.PacificBlue} />
          <mesh geometry={nodes.Circle003_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Circle003_2.geometry} material={materials.GrayGlossy} />
          <mesh geometry={nodes.Circle003_3.geometry} material={materials.Blackmatte} />
          <mesh geometry={nodes.Circle003_4.geometry} material={materials.FrontCamera} />
          <mesh geometry={nodes.Circle003_5.geometry} material={materials.Cameralens} />
          <mesh geometry={nodes.Circle008.geometry} material={materials.Flash2} />
          <mesh geometry={nodes.Circle008_1.geometry} material={materials.Flash} />
        </mesh>
        <mesh geometry={nodes.MuteButton.geometry} material={materials.BodyFrame} />
        <mesh geometry={nodes.PowerButton.geometry} material={materials.BodyFrame} />
        <mesh geometry={nodes.VolumeButton.geometry} material={materials.BodyFrame} />
        <mesh geometry={nodes.Circle004.geometry} material={materials.Blackmatte} />
        <mesh geometry={nodes.Circle004_1.geometry} material={materials.BodyFrame} />
        <mesh geometry={nodes.Circle011.geometry} material={materials.Blackmatte} />
        <mesh geometry={nodes.Circle011_1.geometry} material={materials.BodyFrame} />
      </group>
    </group>
  )
}

useGLTF.preload('/IPhone.glb')