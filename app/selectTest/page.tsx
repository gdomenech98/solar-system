"use client"
import React, { useRef, useEffect, useState } from 'react';
import styles from '../page.module.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Floor from '@/components/Floor';
import { Select, useSelect } from '@react-three/drei';
import Cube from './components/Cube'
import { zoomToObject } from './zoomToObject';

const ENABLE_FLOOR = false;

export default function Test() {
    const cameraRef = useRef(null);
    const controlsRef = useRef(null);
    const [selectedElement, setSelectedElement] = useState<any>();

    useEffect(() => {
        const camera = cameraRef.current;
        const controls = controlsRef.current
        if (selectedElement && camera) {
            zoomToObject(selectedElement, camera, controls)
        }
    }, [selectedElement]);

    return (
        <div className={styles.scene}>
            <Canvas className={styles.canvas} shadows={true}>
                <PerspectiveCamera makeDefault={true} ref={cameraRef} position={[3, 4, 10]} />
                <ambientLight />
                <pointLight castShadow={true} intensity={100} position={[3, 4, 10]} />
                <Select multiple box onChangePointerUp={(s) => setSelectedElement(s[0])}>
                    <Cube name={"cube-pink"} color={"#ff00ff"} position={[0, 0, 0]} />
                    <Cube name={"cube-yellow"} color={"#ffff00"} position={[5, 0, 0]} />
                    <Cube name={"cube-blue"} color={"#00ffff"} position={[-5, 0, 0]} />
                    <Cube name={"cube-white"} color={"#f0f0f0"} position={[0, 0, 5]} />
                </Select>
                {ENABLE_FLOOR && <Floor args={[1, 1]} />}
                <OrbitControls ref={controlsRef} camera={cameraRef.current} />
            </Canvas>
        </div>
    )
}


