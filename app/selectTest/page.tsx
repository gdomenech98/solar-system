"use client"
import React, { useRef, useEffect, useState } from 'react';
import styles from '../page.module.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Floor from '@/components/Floor';
import { Select, useSelect } from '@react-three/drei';
import Cube from './components/Cube'
import { Vector3, Box3 } from 'three';
const ENABLE_FLOOR = false;

export default function Test() {
    const cameraRef = useRef(null);
    const controlsRef = useRef(null);
    const [selectedElement, setSelectedElement] = useState<any>();

    useEffect(() => {
        const camera = cameraRef.current;
        const controls = controlsRef.current;
        if (selectedElement && camera) {
            // Fit camera to object: https://discourse.threejs.org/t/camera-zoom-to-fit-object/936/3
            const offset = 1.25;
            const boundingBox = new Box3();
            boundingBox.setFromObject(selectedElement); // get bounding box of object
            const center = boundingBox.getCenter(new Vector3(0, 0, 0));
            const size = boundingBox.getSize(new Vector3(0, 0, 0));
            // get the max side of the bounding box (fits to width OR height as needed )
            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = camera.fov * (Math.PI / 180);
            let cameraZ = Math.abs(maxDim / 4 * Math.tan(fov * 2));
            cameraZ *= offset; // zoom out a little so that objects don't fill the screen
            camera.position.z = cameraZ;
            camera.updateProjectionMatrix();
            if(controls) {
                controls.target = center;
            }else {
                camera.lookAt(center)
            }
            // controls.target = selectedElement.position
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


