"use client"
import React, { useEffect } from 'react';
import styles from '../page.module.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three'

const ENABLE_FLOOR = true;
export default function Test() {
    const cameraRef = React.useRef(null);

    return (
        <div className={styles.scene} >
            <Canvas className={styles.canvas}>
                <PerspectiveCamera makeDefault={true} ref={cameraRef} position={[2, 5, 2]} />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls camera={cameraRef.current} />
            </Canvas>
        </div>
    )
}
