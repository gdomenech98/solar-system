export const EARTH_RADIUS = 1;
export const AU = 10 * EARTH_RADIUS;
export const EARTH_PERIOD = 5000;

export const solarSystemElements = [
    {
        key: 'sun',
        // radius: 109 * EARTH_RADIUS ,
        radius: 1 * EARTH_RADIUS,
        orbit: {
            period: 1,
            a: 0,
            eccentricity: 0
        },
        color: 'yellow',
    },
    {
        key: 'mercury',
        radius: 0.25 * EARTH_RADIUS,
        orbit: {
            period: 0.24 * EARTH_PERIOD,
            a: 0.39 * AU,
            eccentricity: 0.206
        },
        color: 'red',
    },
    {
        key: 'venus',
        radius: 0.24 * EARTH_RADIUS,
        orbit: {
            period: 0.62 * EARTH_PERIOD,
            a: 0.72 * AU,
            eccentricity: 0.007
        },
        color: 'pink',
    },
    {
        key: 'earth',
        radius: 0.25 * EARTH_RADIUS,
        orbit: {
            period: 1 * EARTH_PERIOD,
            a: 1 * AU,
            eccentricity: 0.017
        },
        color: 'blue',
    },
    {
        key: 'mars',
        radius: 0.13 * EARTH_RADIUS,
        orbit: {
            period: 1.88 * EARTH_PERIOD,
            a: 1.2 * AU,
            eccentricity: 0.093
        },
        color: 'orange',
    },
    {
        key: 'jupiter',
        radius: 2.4 * EARTH_RADIUS,
        orbit: {
            period: 11.86 * EARTH_PERIOD,
            a: 1.7 * AU,
            eccentricity: 0.049
        },
        color: '#EA970F',
    },
    {
        key: 'saturn',
        radius: 2.3 * EARTH_RADIUS,
        orbit: {
            period: 29.46 * EARTH_PERIOD,
            a: 3 * AU,
            eccentricity: 0.056
        },
        color: "#6CC526",
    },
    {
        key: 'uranus',
        radius: 0.9 * EARTH_RADIUS,
        orbit: {
            period: 84 * EARTH_PERIOD,
            a: 4 * AU,
            eccentricity: 0.046
        },
        color: '#26BEC5',
    },
    {
        key: 'neptune',
        radius: 0.85 * EARTH_RADIUS,
        orbit: {
            period: 164.8 * EARTH_PERIOD,
            a: 5 * AU,
            eccentricity: 0.010
        },
        color: "#2671C5",
    },
]