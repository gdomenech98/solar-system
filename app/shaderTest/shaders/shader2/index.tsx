import { fragmentShader } from './fragmentShader';
import { vertexShader } from './vertexShader';
import * as THREE from 'three';

let uniforms: any = {
    color: new THREE.Color("#1a5eb3"),
    c: 0.5,
    p: 6,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true
}

export default (props) => {
    return (
        <shaderMaterial
            uniforms={uniforms}
            fragmentShader={fragmentShader()}
            vertexShader={vertexShader()}
        />)
}