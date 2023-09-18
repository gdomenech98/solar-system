import React from "react";
import { useTexture } from "@react-three/drei";
import Atmosphere from "../Atmosphere";
import * as THREE from 'three';

const Sun = (props) => {
  const texture = useTexture('/textures/sun.jpg');

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh key="sun">
          <sphereGeometry args={[30, 30, 30]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <pointLight castShadow={true} intensity={100000} color="#ffA000" />
        <Atmosphere radius={40} c={0.5} p={6} color={new THREE.Color("#ffA000")} />
      </group>
    </group>
  );
}

export default Sun