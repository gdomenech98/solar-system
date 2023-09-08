"use client"
import React, { useEffect } from 'react';
import styles from '../page.module.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Floor from '@/components/Floor';
import { Select, useSelect } from '@react-three/drei';
import Cube from './components/Cube'
const ENABLE_FLOOR = false;

export default function Test() {
    const cameraRef = React.useRef(null);

    return (
        <div className={styles.scene}>
            <Canvas className={styles.canvas}>
                <PerspectiveCamera makeDefault={true} ref={cameraRef} position={[0, 0, 300]} />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Select multiple box>
                    <Cube />
                </Select>
                {ENABLE_FLOOR && <Floor args={[1, 1]} />}
                <OrbitControls camera={cameraRef.current} />
            </Canvas>
        </div>
    )
}


