import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";

const Mars = (props) => {
  const texture = useTexture('/textures/mars.jpeg')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh receiveShadow={true}>
          <sphereGeometry args={[4.5, 30, 30]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </group>
    </group>
  );
}

export default Mars;