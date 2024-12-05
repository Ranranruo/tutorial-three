import * as THREE from 'three';
import { FontLoader, TextGeometry, TextGeometryParameters } from 'three/examples/jsm/Addons.js';

const app: HTMLElement = document.querySelector("#app")!;

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({antialias: true});
const scene: THREE.Scene = new THREE.Scene();
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, app.clientWidth / app.clientHeight, .1, 100);

renderer.setSize(app.clientWidth, app.clientHeight);

const loader = new FontLoader();

loader.load('fonts/NanumGothicOTF_Regular.json', (font) => {
    const text = new TextGeometry("Hello", {
        font: font,
        size: 80,
        depth: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
    })
    renderer.render(scene, camera);
})

