export function fragmentShader() {
  return `
  uniform vec3 color;

  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying float intensity;
  void main() {

    vec3 glow = color * intensity;
    gl_FragColor.rgba = vec4( glow , 1.0);
  }
  `
}