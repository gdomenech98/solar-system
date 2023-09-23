import Earth from './Earth';
import {useLightDirection} from '../useLightDirection';

const EarthTestScene = () => {
    const lightDirection = useLightDirection();

    return (
        <Earth lightDirection={lightDirection}/>
    )
}

export default EarthTestScene