"use client"
import React from 'react';
import styles from './page.module.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SpaceElement from '@components/SpaceElement';
import { solarSystemElements } from '@/utils/planets';
import Floor from '@/components/Floor';

const ENABLE_FLOOR = false;


export default function SolarSystem() {

  return (
    <div className={styles.scene}>
      <Canvas className={styles.canvas}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {
          solarSystemElements.map(element => (
            <SpaceElement key={element.name} name={element.name} color={element.color} orbit={element.orbit} />
          ))
        }
        {ENABLE_FLOOR && <Floor args={[1, 1]} />}
        <OrbitControls />
      </Canvas>
    </div>
  )
}
