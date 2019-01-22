/**
 * Primary ThreeJS File
 *
 * Sets up the scene renderer and DOM
 *
 */


const THREE = require('three');

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let geometry = new THREE.BoxGeometry( 1, 1, 1 );
let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
let cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.z = 5;

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("Mr Potato Head");

// Demo
console.log(greeter.greet());

const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.12;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

// Init
animate();
