// main.js

import { createDashboard } from './components/dashboard.js';
import { setupControls } from './components/controls.js';
import { addLights } from './components/lights.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Posición inicial
camera.position.set(0, 2, 5);

// Luces
addLights(scene);

// Cabina
createDashboard(scene);

// Controles
setupControls(camera);


//Cabina

// Loop de animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
