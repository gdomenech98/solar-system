import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/3d/venus.gltf") as any;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0,0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere010.geometry}
        //   material={materials.Venus}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere010_1.geometry}
        //   material={materials["Atmosphere.009"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3d/venus.gltf");
