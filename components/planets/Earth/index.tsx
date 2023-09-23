import Earth from './components/Earth';
import {useLightDirection} from './useLightDirection';

const MyScreen = () => {
    const lightDirection = useLightDirection();

    return (
        <Earth lightDirection={lightDirection}/>
    )
}

export default MyScreen;