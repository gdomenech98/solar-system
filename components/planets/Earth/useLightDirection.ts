import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Vector3 } from "three";
import { useSpring } from "framer-motion";

const initialSunRotation = new Vector3(1, 0, 0).applyAxisAngle(
  new Vector3(0, 0, 1),
  Math.PI * (13 / 180)
);

const ROTATION_SPEED = 4;

export const useLightDirection = () => {
  const sunRotationSpring = useSpring(0, { velocity: 1, bounce: 0 });

  const [lightDirection, setLightDirection] = useState<Vector3>(
    initialSunRotation.clone()
  );

  const [sunRotation, setSunRotation] = useState<any>(0);

  useFrame((_, delta) => {
    setSunRotation(state => state + delta);
  });

  useEffect(() => {
    sunRotationSpring.set(sunRotation);
  }, [sunRotation]);

  useEffect(() => {
    const unsuscribeRotation = sunRotationSpring.on("change", (v) => {
      const rotationAxis = new Vector3(0, 1, 0);
      const angle = Math.PI * (-v * ROTATION_SPEED / 180);
      setLightDirection(
        initialSunRotation.clone().applyAxisAngle(rotationAxis, angle)
      );
    });
    return () => {
      unsuscribeRotation();
    };
  }, []);
  return lightDirection;
}