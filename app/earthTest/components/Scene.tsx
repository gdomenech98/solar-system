import Earth from './Earth';
import {useLightDirection} from '../useLightDirection';

export default () => {
    const lightDirection = useLightDirection();

    return (
        <Earth lightDirection={lightDirection}/>
    )
}