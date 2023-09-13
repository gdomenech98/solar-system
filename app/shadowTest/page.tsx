"use client"
import React, { useRef } from 'react';
import styles from '../page.module.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function Test() {
    const cameraRef = React.useRef(null);
    return (
        <div className={styles.scene}>
            <Canvas className={styles.canvas} shadows={true}>
                <PerspectiveCamera makeDefault={true} ref={cameraRef} position={[3, 2, 10]} />
                <ambientLight castShadow={true} intensity={0.7} />
                <pointLight castShadow={true} color={new THREE.Color('#ffffff')} position={[3, 2, 10]} intensity={1000} />
                <group position={[0, 1, 0]} >
                    <mesh castShadow={true} receiveShadow={true}>
                        <sphereGeometry args={[2, 15, 15]} />
                        <meshStandardMaterial color={new THREE.Color('#ff0000')} />
                        <Ring />
                    </mesh>
                </group>
                <mesh receiveShadow={true} position={[0, 0, 0]} rotation={[Math.PI / 2 + Math.PI, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={new THREE.Color('#049ef4')} />
                </mesh>
                <OrbitControls camera={cameraRef.current} />
            </Canvas>
        </div>
    )
}


function Ring() {
    const ringRef = useRef(null);
    const ringTexture = useTexture("/textures/saturn_rings.png")
    return (
        <group rotation={[Math.PI/2,0,0]}>
            <mesh receiveShadow={true} position={[0.3, 0, 0]} rotation={[Math.PI,0,0]}>
                <ringGeometry ref={ringRef} args={[2, 3, 40, 3]} />
                <meshStandardMaterial map={ringTexture} side={THREE.DoubleSide}  color={'white'} transparent={true}/>
            </mesh>
        </group>
    )
}
