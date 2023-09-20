import { Vector3 } from 'three'
export function zoomToObject(object, camera, controls) { 
    // Fits camera and controls to specific object
    // SOURCE: https://discourse.threejs.org/t/camera-zoom-to-fit-object/936/3
    let vFoV = camera.getEffectiveFOV();
    let hFoV = camera.fov * camera.aspect;

    let FoV = Math.min(vFoV, hFoV);
    let FoV2 = FoV / 2;

    let dir = new Vector3();
    camera.getWorldDirection(dir);

    let bs = object.geometry.boundingSphere;
    let bsWorld = bs.center.clone();
    object.localToWorld(bsWorld);

    let th = FoV2 * Math.PI / 180.0;
    let sina = Math.sin(th);
    let R = bs.radius;
    let FL = R / sina;
    let cameraDir = new Vector3();
    camera.getWorldDirection(cameraDir);
    let cameraOffs = cameraDir.clone();
    cameraOffs.multiplyScalar(-FL);
    let newCameraPos = bsWorld.clone().add(cameraOffs);
    camera.position.copy(newCameraPos);
    camera.lookAt(bsWorld);
    controls.target.copy(bsWorld);
    controls.update();
}