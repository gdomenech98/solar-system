
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/3d/mercury.gltf") as any;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003.geometry}
        //   material={materials.Mercury}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003_1.geometry}
        //   material={materials["Atmosphere.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3d/mercury.gltf");