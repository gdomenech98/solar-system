import { useSelect, Edges } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export default function Cube(props) {
    const cubeRef = useRef();

    return (
        <mesh ref={cubeRef} receiveShadow={true} {...props}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={props.color} />
            {/* <Edges visible={true} scale={1.1} renderOrder={1000}>
                <meshBasicMaterial transparent color="#333" depthTest={false} />
            </Edges> */}
        </mesh>
    )
}