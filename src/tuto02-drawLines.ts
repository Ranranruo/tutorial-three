import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const app: Element = document.querySelector("#app")!;

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({antialias: true})

renderer.setSize(app.clientWidth, app.clientHeight);

app.appendChild(renderer.domElement);

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(45, app.clientWidth / app.clientHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene: THREE.Scene = new THREE.Scene();

const material: THREE.LineBasicMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);

new OrbitControls(camera, app as HTMLElement);
renderer.setAnimationLoop(()=>{
    renderer.render(scene, camera);
  })
