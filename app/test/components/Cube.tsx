import { Select, useSelect } from '@react-three/drei';

export default function Cube() {
    const selected = useSelect()
    console.log('SELECTED: ', selected)
    return (
        <mesh>
            <boxGeometry args={[4, 4, 4]} />
        </mesh>
    )
}