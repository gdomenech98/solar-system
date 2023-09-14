import Earth from './components/Earth';
import {useLightDirection} from './useLightDirection';

export default function () {
    const lightDirection = useLightDirection();

    return (
        <Earth lightDirection={lightDirection}/>
    )
}