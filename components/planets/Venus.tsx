import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import Atmosphere from "../Atmosphere";
import * as THREE from "three";

export default function Model(props) {
  const texture = useTexture('/textures/venus.jpeg');
  const atmosphereTexture = useTexture('/textures/venus_atmosphere.jpeg')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh receiveShadow={true}>
          <sphereGeometry args={[1.5, 30, 30]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh receiveShadow={true}>
          <sphereGeometry args={[1.6, 30, 30]}/>
          <meshStandardMaterial map={atmosphereTexture} opacity={0.4} transparent={true}/>
        </mesh>

        {/* Add atmosphere texture to shader */}
        {/* <Atmosphere radius={2} c={0.7} p={5}  color={new THREE.Color("#5c4f00")} /> */}
      </group>
    </group>
  );
}
