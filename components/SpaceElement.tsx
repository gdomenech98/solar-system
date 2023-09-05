import {OrbitInterface} from "@/types";
import { computeSemiMinorAxis, calculateVelocity} from "@/utils/utils";
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber'

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
            <sphereGeometry args={[props.radius, 50, 50]} />
            <meshStandardMaterial color={props.color ?? 'white'} />
        </mesh>
    )
}
export default SpaceElement;