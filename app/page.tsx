"use client"
import React, { useRef } from 'react';
import styles from './page.module.css';
import { Canvas } from '@react-three/fiber';
import Scene from '@/components/Scene';

export default function SolarSystem() {
  return (
    <div className={styles.scene}>
      <Canvas className={styles.canvas} shadows={true}>
        <Scene/>
      </Canvas>
    </div>
  )
}
