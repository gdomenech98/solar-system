import React from 'react';
import { useTexture } from "@react-three/drei";
import Ring from '../Ring';

export default function Model(props) {
  const planetTexture = useTexture("/textures/uranus.png")
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh>
          <sphereGeometry args={[5.5, 30, 30]} />
          <meshStandardMaterial map={planetTexture} />
        </mesh>
        <mesh key="rings" rotation={[-Math.PI / 15, 0, 0]}>
          <Ring args={[5,9]} textureUrl='/textures/uranus_rings.png'/>
        </mesh>
      </group>
    </group>
  );
}
