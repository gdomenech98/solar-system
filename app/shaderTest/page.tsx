"use client"
import React, { useEffect, useRef } from 'react';
import styles from '../page.module.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import Atmosphere from "../../components/Atmosphere";

export default function Test() {
    const cameraRef = React.useRef(null);

    return (
        <div className={styles.scene}>
            <Canvas className={styles.canvas} shadows={true}>
                <PerspectiveCamera makeDefault={true} ref={cameraRef} position={[3, 2, 10]} />
                <ambientLight castShadow={true} intensity={0.7} />
                <pointLight castShadow={true} color={new THREE.Color('#ffffff')} position={[3, 2, 10]} intensity={1000} />
                <Element/>
                <OrbitControls camera={cameraRef.current} />
            </Canvas>
        </div>
    )
}


function Element() {
    const texture = useTexture('/textures/venus.jpeg');
    const atmosphereTexture = useTexture('/textures/venus_atmosphere.jpeg')
    return (
        <group position={[0, 0, 0]}>
            <mesh receiveShadow={true}>
                <sphereGeometry args={[1.5, 30, 30]} />
                <meshStandardMaterial map={texture} />
            </mesh>
            <Atmosphere radius={2} c={0.8} p={6} color={new THREE.Color("#5c4f00")} />
        </group>
    )
}