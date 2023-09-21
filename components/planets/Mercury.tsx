
import React from "react";
import { useTexture } from "@react-three/drei";

const Mercury = (props) => {
  const texture = useTexture('/textures/mercury.jpeg');

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh receiveShadow={true}>
          <sphereGeometry args={[4, 30, 30]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </group>
    </group>
  );
}

export default Mercury