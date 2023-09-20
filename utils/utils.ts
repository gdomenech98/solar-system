import { Vector3 } from "three";

export const computeSemiMinorAxis = (a, eccentricity) => {
    const b = a * Math.sqrt(1 - eccentricity * eccentricity); // b is semi minor axis of ellipse
    return b
}

export const calculateVelocity = (a, T) => {
    return (2 * Math.PI * a) / T;
}

export function areSameVectors(v1: Vector3, v2: Vector3, threshold=0.5) {
    if (!v1 || !v2) return false
    const result = v1.x - v2.x
    return Math.abs(result) < threshold
}