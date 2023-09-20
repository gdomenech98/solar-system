import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Floor from '@/components/Floor';
import { Select } from '@react-three/drei';
import Cube from './Cube'
import { zoomToObject } from '../zoomToObject';

const ENABLE_FLOOR = false;


function areSameVectors (v1,v2) {
    if(!v1 || !v2) return false
    const threshold = 0.5
    return Object.keys(v1).every(k => Math.abs(v1[k] - v2[k]) <= threshold)
}
export default function Test() {
    const cameraRef = useRef(null);
    const controlsRef = useRef(null);
    const [selectedElement, setSelectedElement] = useState<any>();
    let destinationPos;
    useFrame(({ camera }) => {
        const controls = controlsRef.current
        const isInPosition = areSameVectors(camera.position, destinationPos)
        if (selectedElement && !isInPosition) {
            destinationPos = zoomToObject(selectedElement, camera, controls)
        }
        if(isInPosition){
            destinationPos = undefined
        }
    })

    return (
        <>
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
        </>
    )
}


