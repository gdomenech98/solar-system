import { OrbitInterface } from "@/types";
import { computeSemiMinorAxis, calculateVelocity } from "@/utils/utils";
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber'
import planets from "./planets";


function SpaceElement(props) {
    const orbit: OrbitInterface = props.orbit;
    const planetRef = useRef(null);
    const [t, setT] = useState(0);
    const x = orbit.a * Math.cos(t);
    const z = computeSemiMinorAxis(orbit.a, orbit.eccentricity) * Math.sin(t);

    useFrame((state, delta) => {
        const velocity = calculateVelocity(orbit.a, orbit.period)
        setT((prevT) => prevT + velocity);
    })

    return (
        <mesh
            ref={planetRef}
            position={[x, 0, z]}
            key={props.key ?? Math.random() * 100}
        >
            {planets[props.name]({})}
        </mesh>
    )
}
export default SpaceElement;