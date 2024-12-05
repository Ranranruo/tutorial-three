import * as THREE from 'three'
const domApp = document.querySelector("#app")!;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, domApp.clientWidth / domApp.clientHeight  , 0.1, 1000);

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(domApp.clientWidth, domApp.clientHeight);


domApp.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;


renderer.setAnimationLoop(()=>{
  cube.rotation.x += .01;
  cube.rotation.y += .01;
  renderer.render(scene, camera);
})