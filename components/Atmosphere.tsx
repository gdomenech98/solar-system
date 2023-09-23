import * as THREE from 'three';
import './shaders/AtmosphereShader';

const Atmosphere = ({radius, c=0.5, p=6, color=new THREE.Color("#ffffff")}) => {
    return (
        <mesh>
            <sphereGeometry args={[radius, 40, 40]} />
            {/*@ts-ignore*/}
            <atMaterial c={c} p={p} color={color} />
        </mesh>
    )
}

export default Atmosphere;
