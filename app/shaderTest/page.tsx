"use client"
import React, { useEffect, useRef } from 'react';
import styles from '../page.module.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import ColorShader from './shaders/ColorShader';

export default function Test() {
    const cameraRef = React.useRef(null);

    return (
        <div className={styles.scene}>
            <Canvas className={styles.canvas} shadows={true}>
                <PerspectiveCamera makeDefault={true} ref={cameraRef} position={[3, 2, 10]} />
                <ambientLight castShadow={true} intensity={0.7} />
                <pointLight castShadow={true} color={new THREE.Color('#ffffff')} position={[3, 2, 10]} intensity={1000} />
                <Element1/>
                <OrbitControls camera={cameraRef.current} />
            </Canvas>
        </div>
    )
}

function Element1() { // Default shader
    return (
        <group position={[0, 0, 0]}>
            <mesh >
                <sphereGeometry args={[1.5, 30, 30]}/>
                <ColorShader/>
            </mesh>
        </group>
    )
}
