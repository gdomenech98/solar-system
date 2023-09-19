import { useSelect, Edges } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export default function Cube(props) {
    const selected = useSelect()
    const cubeRef = useRef();

    const { camera } = useThree()
    useEffect(() => {
        const selectedElement = selected[0];
        if(selectedElement){
            camera.position.copy(selectedElement?.position);
            camera.position.z += 5; // Adjust this to ensure the camera is not inside the object
            camera.lookAt(selectedElement?.position);
        }
    }, [selected]);

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