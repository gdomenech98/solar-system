"use client"
import React, { useEffect, useRef } from 'react';
import styles from '../page.module.css';
import { Canvas, useFrame } from '@react-three/fiber';
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
                <Planet />
                <mesh receiveShadow={true} position={[0, 0, 0]} rotation={[Math.PI / 2 + Math.PI, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={new THREE.Color('#049ef4')} />
                </mesh>
                <OrbitControls camera={cameraRef.current} />
            </Canvas>
        </div>
    )
}

function Planet() {
    const planetRef = React.useRef(null);
    const [t, setT] = React.useState(0);

    useFrame((state, delta) => {
        if (planetRef.current) {
            planetRef.current.position.x = 2 * Math.cos(t)
            planetRef.current.position.z = 2 * Math.cos(t)
            setT(t => t + 0.01)
        }
    });

    return (
        <group ref={planetRef}>
            <mesh position={[0, 1, 0]} castShadow={true} receiveShadow={true}>
                <sphereGeometry args={[2, 15, 15]} />
                <meshStandardMaterial color={new THREE.Color('#ff0000')} />
                <Ring />
            </mesh>
        </group>
    )
}
function Ring() {
    const ringRef = useRef(null);
    const ringTexture = useTexture("/textures/saturn_rings.png");

    const innerRadius = 3;
    const outerRadius = 5;
    const phi = 1;
    const theta = 100;
    const medium = (innerRadius+outerRadius)/2
    
    useEffect(() => {
        const geometry = ringRef.current;
        if (geometry) {
            var pos = geometry.attributes.position;
            var v3 = new THREE.Vector3();
            for (let i = 0; i < pos.count; i++) {
                v3.fromBufferAttribute(pos, i);
                geometry.attributes.uv.setXY(i, v3.length() < medium ? 0 : 1, 1);
            };
        }
    }, [ringRef.current])

    return (
        <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh receiveShadow={true} position={[0.3, 0, 0]} >
                <ringGeometry ref={ringRef} args={[innerRadius, outerRadius, theta, phi]} />
                <meshStandardMaterial map={ringTexture} side={THREE.DoubleSide} color={'white'} transparent={true} />
            </mesh>
        </group>
    )
}
