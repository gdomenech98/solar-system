import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Select } from '@react-three/drei';
import SpaceElement from '@components/SpaceElement';
import { solarSystemElements } from '@/utils/planets';
import Floor from '@/components/Floor';
import { zoomToObject } from '@/utils/zoomToObject';
import { areSameVectors } from '@/utils/utils';

const ENABLE_FLOOR = false;
export default () => {
    let destinationPos;
    const cameraRef = useRef(null);
    const controlsRef = useRef(null);
    const [selectedElement, setSelectedElement] = useState<any>();
    const ended = useRef(false)

    useFrame(({ camera }) => {
        const controls = controlsRef.current
        const finishMove = areSameVectors(camera.position, destinationPos)
        if (selectedElement && !ended.current && !finishMove) {
            destinationPos = zoomToObject(selectedElement, camera, controls, 0.05)
        } else {
            ended.current = true
        }
    })

    useEffect(() => {
        ended.current = false;
    }, [selectedElement])

    return (
        <>
            <PerspectiveCamera makeDefault={true} ref={cameraRef} position={[0, 0, 300]} />
            <ambientLight intensity={1} />
            <Select
                box
                multiple={false}
                onChangePointerUp={(s) => setSelectedElement(s[0])}
            >
                {
                    solarSystemElements.map(element => (
                        <SpaceElement key={element.name} name={element.name} orbit={element.orbit} />
                    ))
                }
            </Select>
            {ENABLE_FLOOR && <Floor args={[1, 1]} />}
            <OrbitControls ref={controlsRef} camera={cameraRef.current} />
        </>
    )
}