/* Source
    https://discourse.threejs.org/t/applying-a-texture-to-a-ringgeometry/9990
*/

import { useRef, useEffect } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from 'three';

type Props = {
    args: any[];
    textureUrl: string;
}

function Ring({ args, textureUrl = undefined }: Props) { // Care if modify args, maybe no load texture properly
    const ringRef = useRef(null);
    const ringTexture = useTexture(textureUrl ?? "https://i.postimg.cc/zz7Gr430/saturn-rings-top.png")
    const innerRadius = args[0];
    const outerRadius = args[1];
    const phi = args[2] ?? 1;
    const theta = args[3] ?? 64;
    const threshHold = (innerRadius + outerRadius) / 2

    useEffect(() => {
        const geometry = ringRef.current;
        if (geometry) {
            var pos = geometry.attributes.position;
            var v3 = new THREE.Vector3();
            for (let i = 0; i < pos.count; i++) {
                v3.fromBufferAttribute(pos, i);
                geometry.attributes.uv.setXY(i, v3.length() < threshHold ? 0 : 1, 1);
            };
        }
    }, [ringRef.current])

    return (
        <mesh receiveShadow={true} >
            <ringGeometry ref={ringRef} args={[innerRadius, outerRadius, theta, phi]} />
            <meshStandardMaterial map={ringTexture} side={THREE.DoubleSide} color={'white'} transparent={true} />
        </mesh>
    )
}

export default Ring;

