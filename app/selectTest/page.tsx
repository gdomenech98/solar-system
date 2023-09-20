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

    function zoomToObject(object, camera, controls) { 
        // Fits camera and controls to specific object
        // SOURCE: https://discourse.threejs.org/t/camera-zoom-to-fit-object/936/3
        let vFoV = camera.getEffectiveFOV();
        let hFoV = camera.fov * camera.aspect;

        let FoV = Math.min(vFoV, hFoV);
        let FoV2 = FoV / 2;

        let dir = new Vector3();
        camera.getWorldDirection(dir);

        let bs = object.geometry.boundingSphere;
        let bsWorld = bs.center.clone();
        object.localToWorld(bsWorld);

        let th = FoV2 * Math.PI / 180.0;
        let sina = Math.sin(th);
        let R = bs.radius;
        let FL = R / sina;
        let cameraDir = new Vector3();
        camera.getWorldDirection(cameraDir);
        let cameraOffs = cameraDir.clone();
        cameraOffs.multiplyScalar(-FL);
        let newCameraPos = bsWorld.clone().add(cameraOffs);
        camera.position.copy(newCameraPos);
        camera.lookAt(bsWorld);
        controls.target.copy(bsWorld);
        controls.update();
    }
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


