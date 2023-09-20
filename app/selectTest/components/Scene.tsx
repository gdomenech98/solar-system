import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Floor from '@/components/Floor';
import { Select } from '@react-three/drei';
import Cube from './Cube'
import { zoomToObject } from '../zoomToObject';
import { Vector3 } from 'three';

const ENABLE_FLOOR = false;


function areSameVectors(v1: Vector3, v2: Vector3) {
    if (!v1 || !v2) return false
    const result = v1.x - v2.x
    const threshold = 0.5
    return Math.abs(result) < threshold
}
export default function Test() {
    const cameraRef = useRef(null);
    const controlsRef = useRef(null);
    const [selectedElement, setSelectedElement] = useState<any>();
    const ended = useRef(false)
    let destinationPos;
    useFrame(({ camera }) => {
        const controls = controlsRef.current
        const finishMove = areSameVectors(camera.position, destinationPos)
        if ( selectedElement && !ended.current && !finishMove) {
            destinationPos = zoomToObject(selectedElement, camera, controls, 0.05)
        }else {
            ended.current = true
        }
    })

    useEffect(() => {
        ended.current = false;
    }, [selectedElement])

    return (
        <>
            <PerspectiveCamera makeDefault={true} ref={cameraRef} position={[3, 4, 10]} />
            <ambientLight />
            <pointLight castShadow={true} intensity={100} position={[3, 4, 10]} />
            <Select multiple box onChangePointerUp={(s) => {
                setSelectedElement(s[0])
            }}>
                <Cube name={"cube-pink"} color={"#ff00ff"} position={[0, 0, 0]} />
                <Cube name={"cube-yellow"} color={"#ffff00"} position={[5, 0, 0]} />
                <Cube name={"cube-blue"} color={"#00ffff"} position={[-5, 0, 0]} />
                <Cube name={"cube-white"} color={"#f0f0f0"} position={[0, 0, 5]} />
            </Select>
            {ENABLE_FLOOR && <Floor args={[1, 1]} />}
            <OrbitControls ref={controlsRef} camera={cameraRef.current} />
        </>
    )
}


