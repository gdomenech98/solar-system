"use client"
import React, { useRef } from 'react';
import styles from './page.module.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import SpaceElement from '@components/SpaceElement';
import { solarSystemElements } from '@/utils/planets';
import Floor from '@/components/Floor';


const ENABLE_FLOOR = false;


export function Model(props) {
  const { nodes, materials } = useGLTF("/3d/uranus.gltf") as any;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009.geometry}
          material={materials.Uranus}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_1.geometry}
          // material={materials["Atmosphere.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_2.geometry}
          // material={materials["Rings.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3d/uranus.gltf");


export default function SolarSystem() {

  return (
    <div className={styles.scene}>
      <Canvas className={styles.canvas}>
        <Model/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {
          solarSystemElements.map(element => (
            <SpaceElement key={element.key} radius={element.radius} color={element.color} orbit={element.orbit} />
          ))
        }
        {ENABLE_FLOOR && <Floor args={[1, 1]} />}
        <OrbitControls />
      </Canvas>
    </div>
  )
}
