import React, {} from "react";
import { useTexture } from "@react-three/drei";
import Atmosphere from "../Atmosphere";
import * as THREE from "three";

export default function Model(props) {
  const texture = useTexture("/textures/jupiter.jpeg")
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh receiveShadow={true}>
          <sphereGeometry args={[8, 30, 30]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <Atmosphere radius={8.5} c={0.7} p={3}  color={new THREE.Color("#695431")} />
      </group>
    </group>
  );
}