var SW = window.innerWidth, SH = window.innerHeight;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, SW / SH, 0.1, 1000);// fov, aspect, near/far clip planes
var renderer = new THREE.WebGLRenderer();

renderer.setSize(SW, SH);
document.body.appendChild(renderer.domElement);

var cabinaPrincipal = new THREE.BoxGeometry(1,1, 1);
var cabinaPrincipalmMaterial = new THREE.MeshLambertMaterial( { color : 0x00ff00 }); 
var cabina = new THREE.Mesh( cabinaPrincipal, cabinaPrincipalmMaterial );
scene.add( cabina );
camera.position.z = 5;

var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 0, 5);
scene.add(directionalLight);

function animate(){ 
	renderer.render(scene, camera);
  requestAnimationFrame(animate);
  cabina.rotation.x += 0.005;
  cabina.rotation.y += 0.005;
}       

animate();
