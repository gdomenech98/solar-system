export function vertexShader() {
  return `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;

  uniform float c;
  uniform float p;

  varying float intensity;
  void main() {

    vec3 viewVector = cameraPosition;

    vec3 vNormal = normalize( normalMatrix * normal );
    vec3 vNormel = normalize( normalMatrix * viewVector );
    intensity = pow( c - dot(vNormal, vNormel), p );
    
    vUv = uv;
    vPosition = position;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `
}