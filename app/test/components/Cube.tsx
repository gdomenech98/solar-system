import { Select, useSelect } from '@react-three/drei';
import { useEffect } from 'react';

export default function Cube() {
    const selected = useSelect()
    useEffect(() => {
        console.log('SELECTED: ', selected)
    },[])
    return (
        <mesh>
            <boxGeometry args={[4, 4, 4]} />
        </mesh>
    )
}