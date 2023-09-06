import React, {} from "react";
import { useTexture } from "@react-three/drei";

export default function Model(props) {
  const texture = useTexture("/textures/jupiter.jpg")
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh>
          <sphereGeometry args={[8, 30, 30]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </group>
    </group>
  );
}