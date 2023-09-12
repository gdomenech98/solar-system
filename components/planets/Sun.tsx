import React from "react";
import { useTexture } from "@react-three/drei";

export default function Model(props) {
  const texture = useTexture('/textures/sun.jpg');
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh receiveShadow={true} castShadow={true}>
          <sphereGeometry args={[30, 30, 30]} />
          <meshStandardMaterial map={texture} emissive={"#ffA000"} emissiveIntensity={0.15} />
          <pointLight castShadow={true} intensity={100000} color="#ffA000" />
        </mesh>
      </group>
    </group>
  );
}
