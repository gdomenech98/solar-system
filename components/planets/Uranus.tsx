import React from 'react';
import { useGLTF } from '@react-three/drei';


export default function Model(props) {
    const { nodes, materials } = useGLTF("/3d/uranus.gltf") as any;
    return (
      <group {...props} dispose={null}>
        <group position={[0, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere009.geometry}
            material={materials.Uranus}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere009_1.geometry}
            // material={materials["Atmosphere.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere009_2.geometry}
            // material={materials["Rings.001"]}
          />
        </group>
      </group>
    );
  }

useGLTF.preload("/3d/uranus.gltf");
