import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

const AtMaterial = shaderMaterial(
  {
    color: new THREE.Color("#1a5eb3"),
    c: 0.5,
    p: 6
  },
  // vertex shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;

    uniform float c;
    uniform float p;

    varying float intensity;
    void main() {

      vec3 viewVector = cameraPosition;

      vec3 vNormal = normalize( normalMatrix * normal );
      vec3 vNormel = normalize( normalMatrix * viewVector );
      intensity = pow( c - dot(vNormal, vNormel), p );
      
      vUv = uv;
      vPosition = position;
      vNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float time;
    uniform vec3 color;

    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying float intensity;
    void main() {

      vec3 glow = color * intensity;
      gl_FragColor.rgba = vec4( glow , 1.0);
    }
  `,
  (self) => {
    self.side = THREE.BackSide;
    self.blending = THREE.AdditiveBlending;
    self.transparent = true;
  }
);

extend({ AtMaterial });
