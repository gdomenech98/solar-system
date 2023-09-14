import Earth from "./Earth/index";
import Jupiter from "./Jupiter";
import Mars from "./Mars";
import Mercury from "./Mercury";
import Neptune from "./Neptune";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Venus from "./Venus";
import Sun from "./Sun";

export default {
    sun: Sun,
    mercury: Mercury,
    venus: Venus,
    // earth: Earth,
    earth: () => {},
    mars: Mars,
    jupiter: Jupiter,
    saturn: Saturn,
    uranus: Uranus,
    neptune: Neptune
}