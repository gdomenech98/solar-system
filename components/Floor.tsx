import React from "react";
import {Grid} from '@react-three/drei';

function Floor(props) {
  return (
    <Grid infiniteGrid={true} cellSize={10} sectionColor={'white'} {...props} />
  );
}

export default Floor;