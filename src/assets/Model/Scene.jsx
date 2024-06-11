/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 scene.gltf 
Author: wallmasterr (https://sketchfab.com/wallmasterr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tenhun-falling-spaceman-fanart-9fd80b6a259f41fd99e6f56eee686dc5
Title: Tenhun Falling spaceman (FanArt)
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Models/spaceman.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    actions[names[0]].play();
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.193}>
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group name="Cube009" rotation={[-2.708, 0.013, -1.447]} scale={1.307} />
              <group name="Cube011" />
              <skinnedMesh name="Cube001_0" geometry={nodes.Cube001_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube001_0.skeleton} />
              <skinnedMesh name="Cube005_0" geometry={nodes.Cube005_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube005_0.skeleton} />
              <skinnedMesh name="Cube002_0" geometry={nodes.Cube002_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube002_0.skeleton} />
              <skinnedMesh name="Plane_0" geometry={nodes.Plane_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Plane_0.skeleton} />
              <skinnedMesh name="Cube008_0" geometry={nodes.Cube008_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube008_0.skeleton} />
              <skinnedMesh name="Cube004_0" geometry={nodes.Cube004_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube004_0.skeleton} />
              <skinnedMesh name="Cube003_0" geometry={nodes.Cube003_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube003_0.skeleton} />
              <skinnedMesh name="Cube_0" geometry={nodes.Cube_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube_0.skeleton} />
              <skinnedMesh name="Cube009_0" geometry={nodes.Cube009_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube009_0.skeleton} />
              <skinnedMesh name="Cube011_0" geometry={nodes.Cube011_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube011_0.skeleton} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')