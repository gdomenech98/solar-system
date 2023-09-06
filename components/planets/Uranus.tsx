import React from 'react';
import { useTexture } from "@react-three/drei";
import * as THREE from 'three';

export default function Model(props) {
  const planetTexture = useTexture("/textures/uranus.png")
  const ringTexture = useTexture("/textures/uranus_rings.png")
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh>
          <sphereGeometry args={[5.5, 30, 30]} />
          <meshStandardMaterial map={planetTexture} />
        </mesh>
        <mesh key="rings" rotation={[-Math.PI / 15, 0, 0]}>
          <ringGeometry args={[5.6, 7.7, 50, 4]} />
          <meshStandardMaterial map={ringTexture} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}
