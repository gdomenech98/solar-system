"use client"
import React, { Suspense, useRef } from 'react';
import styles from './page.module.css';
import { Canvas } from '@react-three/fiber';
import Scene from '@/components/Scene';
import { useProgress, Html } from '@react-three/drei';

function LoadingBar() {
  const { active, progress, loaded, total } = useProgress();

  return (
    <Html style={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
      <div style={{ width: '250px', height: '10px', background: '#555', borderRadius: '5px', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}>
        <div style={{ width: `${progress}%`, height: '10px', background: 'white', borderRadius: '5px' }} />
      </div>
      <div style={{ marginTop: '8px', textAlign: 'center' }}>Loading {progress}%</div>
    </Html>
  );
}

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
