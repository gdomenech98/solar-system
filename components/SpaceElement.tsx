import { OrbitInterface } from "@/types";
import { computeSemiMinorAxis, calculateVelocity } from "@/utils/utils";
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber'
import { useSelect } from '@react-three/drei';
import planets from "./planets";


function SpaceElement(props) {
    const orbit: OrbitInterface = props.orbit;
    const planetRef = useRef(null);
    const [t, setT] = useState(0);

    const selected = useSelect()

    useEffect(() => {
        console.log('SELECTED: ', selected)
    }, [selected])

    useFrame((state, delta) => {
        if (planetRef.current) {
            const velocity = calculateVelocity(orbit.a, orbit.period)
            const newT = t + velocity;
            planetRef.current.position.x = orbit.a * Math.cos(newT);
            planetRef.current.position.z = computeSemiMinorAxis(orbit.a, orbit.eccentricity) * Math.sin(newT);
            setT(newT)
        }
    })

    return (
        <mesh
            ref={planetRef}
        >
            {planets[props.name]()}
        </mesh>
    )
}
export default SpaceElement;