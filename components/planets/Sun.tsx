import React from "react";
import { useTexture } from "@react-three/drei";
import Atmosphere from "../Atmosphere";
import * as THREE from 'three';

export default function Model(props) {
  const texture = useTexture('/textures/sun.jpg');

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh key="sun" receiveShadow={true} castShadow={true}>
          <sphereGeometry args={[30, 30, 30]} />
          <meshStandardMaterial map={texture} emissive={"#ffA000"} emissiveIntensity={0.05} />
        </mesh>
        <mesh key="sun-light">
          <pointLight castShadow={true} intensity={100000} color="#ffA000" />
        </mesh>
        <Atmosphere radius={40} c={0.5} p={6} color={new THREE.Color("#ffA000")}/>
      </group>
    </group>
  );
}
