"use client"
import React from 'react';
import styles from '../page.module.css';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';

export default function Test() {
    return (
        <div className={styles.scene}>
            <Canvas className={styles.canvas} shadows={true}>
                <Scene />
            </Canvas>
        </div>
    )
}


