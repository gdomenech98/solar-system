export const EARTH_RADIUS = 10;
export const AU = 10 * EARTH_RADIUS;
export const EARTH_PERIOD = 100000;

export const solarSystemElements = [
    {
        name: 'sun',
        orbit: {
            period: 1,
            a: 0,
            eccentricity: 0
        }
    },
    {
        name: 'mercury',
        orbit: {
            period: 0.24 * EARTH_PERIOD,
            a: 0.39 * AU,
            eccentricity: 0.206
        }
    },
    {
        name: 'venus',
        orbit: {
            period: 0.62 * EARTH_PERIOD,
            a: 0.72 * AU,
            eccentricity: 0.007
        }
    },
    {
        name: 'earth',
        orbit: {
            period: 1 * EARTH_PERIOD,
            a: 1 * AU,
            eccentricity: 0.017
        }
    },
    {
        name: 'mars',
        orbit: {
            period: 1.88 * EARTH_PERIOD,
            a: 1.2 * AU,
            eccentricity: 0.093
        }
    },
    {
        name: 'jupiter',
        orbit: {
            period: 11.86 * EARTH_PERIOD,
            a: 1.4 * AU,
            eccentricity: 0.049
        }
    },
    {
        name: 'saturn',
        orbit: {
            period: 29.46 * EARTH_PERIOD,
            a: 1.7 * AU,
            eccentricity: 0.056
        }
    },
    {
        name: 'uranus',
        orbit: {
            period: 84 * EARTH_PERIOD,
            a: 2 * AU,
            eccentricity: 0.046
        }
    },
    {
        name: 'neptune',
        orbit: {
            period: 164.8 * EARTH_PERIOD,
            a: 2.5 * AU,
            eccentricity: 0.010
        }
    },
]