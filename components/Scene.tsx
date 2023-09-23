import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Select, Stars } from '@react-three/drei';
import SpaceElement from '@components/SpaceElement';
import { solarSystemElements } from '@/utils/planets';
import Floor from '@/components/Floor';
import { zoomToObject } from '@/utils/zoomToObject';

const ENABLE_FLOOR = false;
const Scene = () => {
    const cameraRef = useRef(null);
    const controlsRef = useRef(null);
    const [selectedElement, setSelectedElement] = useState<any>();

    useFrame(({ camera }) => {
        const controls = controlsRef.current
        if (selectedElement) {
            zoomToObject(selectedElement, camera, controls, 0.05)
        }
       
    })

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
            <Stars
                radius={200}           // Radio del espacio donde se distribuyen las estrellas
                depth={100}             // Profundidad (desde el centro)
                count={15000}           // Cantidad de estrellas
                factor={4}             // Tamaño de las estrellas
                saturation={1000}         // Saturación del color
                fade={false}                 // Hacer que las estrellas más lejanas sean más tenues
            />
            {ENABLE_FLOOR && <Floor args={[1, 1]} />}
            <OrbitControls
                ref={controlsRef}
                camera={cameraRef.current}
                maxDistance={400}
                minDistance={10}
            />
        </>
    )
}

export default Scene;