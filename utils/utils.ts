export const computeSemiMinorAxis = (a, eccentricity) => {
    const b = a * Math.sqrt(1 - eccentricity * eccentricity); // b is semi minor axis of ellipse
    return b
}

export const calculateVelocity = (a, T) => {
    return (2 * Math.PI * a) / T;
}