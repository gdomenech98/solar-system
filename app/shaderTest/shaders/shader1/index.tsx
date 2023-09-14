import { fragmentShader } from './fragmentShader';
import { vertexShader } from './vertexShader';
import * as THREE from 'three';

let uniforms = {
    colorB: { type: 'vec3', value: new THREE.Color(0xACB6E5) },
    colorA: { type: 'vec3', value: new THREE.Color(0x74ebd5) }
}

export default (props) => {
    return (
        <shaderMaterial
            uniforms={uniforms}
            fragmentShader={fragmentShader()}
            vertexShader={vertexShader()}
        />)
}