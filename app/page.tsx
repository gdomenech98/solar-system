"use client"
import React, { Suspense, useRef } from 'react';
import styles from './page.module.css';
import { Canvas } from '@react-three/fiber';
import Scene from '@/components/Scene';
import LoadingBar from '@/components/LoadingBar'

export default function SolarSystem() {
  return (
    <div className={styles.scene}>
      <Canvas className={styles.canvas} shadows={true}>
        <Suspense fallback={<LoadingBar />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
