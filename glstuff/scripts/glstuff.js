// set up the viewing parameters
var fieldOfView = 45;
var aspect = window.innerWidth / window.innerHeight;
var nearClippingPlane = 0.1;
var farClippingPlane = 1000;

// set the scene, position the camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(fieldOfView, aspect, nearClippingPlane, farClippingPlane);
var renderer = new THREE.WebGLRenderer({antialias: true});

camera.position.set(0, 0, 10);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// utility function for converting radians to degrees
var degree = function(degrees) {
    return Math.PI/180 * degrees;
}

// handle resizing the window
window.addEventListener("resize", function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false);

var render = function() {
    requestAnimationFrame(render);
    ball.rotation.x += 0.05;
    ball.rotation.y -= 0.05;
    renderer.render(scene, camera);
};

// drop our ball in
var ball_geometry = new THREE.SphereGeometry(0.5, 16, 16);
var ball_material = new THREE.MeshNormalMaterial();
var ball = new THREE.Mesh(ball_geometry, ball_material);
ball.position.set(-1.5, 0, 0);
scene.add(ball);

// drop our cue in
var cube_geometry = new THREE.BoxGeometry(6.5, 0.2, 0.2);
var cube_material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(cube_geometry, cube_material);
cube.rotation.set(degree(20), degree(-15), degree(15))
cube.position.set(0, 0.5, -1);
scene.add(cube);

// Ta-da!
render();

