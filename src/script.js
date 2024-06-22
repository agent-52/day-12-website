import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


/**
 * canvas1
 */


/**
 * Base
 */
// Debug

const gui = new dat.GUI()
gui.hide()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures 
*/
const textureLoader = new THREE.TextureLoader()

/**
 * Galaxy
 */

const parameters = {}
parameters.count = 100000
parameters.size = 0.01
parameters.radius = 5
parameters.branches = 3
parameters.spin = 4
parameters.randomness = 0.2
parameters.randomnessPower = 4.5
parameters.insideColor = "#ff6030"
parameters.outsideColor = "#ba5ce6"

let geometry = null
let material = null
let points = null

const generateGalaxy = () => {

    /**
     * Destroy old galaxy 
    */
   if(points !== null){
    geometry.dispose()
    material.dispose()
    scene.remove(points)
   }

    /**
     * Geometry
     */

    geometry = new THREE.BufferGeometry()

    const positions = new Float32Array(parameters.count*3)
    const colors = new Float32Array(parameters.count*3)

    const colorInside = new THREE.Color(parameters.insideColor)
    const colorOutside = new THREE.Color(parameters.outsideColor)

    for (let i = 0; i < parameters.count; i++) {
        const i3 = i*3

        const branchAngle = (i% parameters.branches)/parameters.branches*Math.PI*2
        const radius = Math.random()*parameters.radius
        const spinAngle = radius*parameters.spin

        const randomX = Math.pow(Math.random(),parameters.randomnessPower)*(Math.random() < 0.5 ? 1 : -1)
        const randomY = Math.pow(Math.random(),parameters.randomnessPower)*(Math.random() < 0.5 ? 1 : -1)
        const randomZ = Math.pow(Math.random(),parameters.randomnessPower)*(Math.random() < 0.5 ? 1 : -1)

        positions[i3+0] = Math.cos(branchAngle + spinAngle)*radius + randomX
        positions[i3+1] = randomY
        positions[i3+2] = Math.sin(branchAngle + spinAngle)*radius + randomZ

        //Colors
        const mixedColor = colorInside.clone()
        mixedColor.lerp(colorOutside, radius/parameters.radius)

        colors[i3+0] = mixedColor.r
        colors[i3+1] = mixedColor.g
        colors[i3+2] = mixedColor.b
        
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    /**
     * Material
     */
     material = new THREE.PointsMaterial({
        size: parameters.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
    })

    /**
     * Points
     */
     points = new THREE.Points(geometry, material)
    scene.add(points)
}

generateGalaxy()

gui.add(parameters, "count").min(100).max(1000000).step(100).onFinishChange(generateGalaxy)
gui.add(parameters, "size").min(0.001).max(0.1).step(0.001).onFinishChange(generateGalaxy)
gui.add(parameters, "radius").min(0.001).max(20).step(0.001).onFinishChange(generateGalaxy)
gui.add(parameters, "branches").min(2).max(20).step(1).onFinishChange(generateGalaxy)
gui.add(parameters, "spin").min(-5).max(5).step(0.001).onFinishChange(generateGalaxy)
gui.add(parameters, "randomness").min(0).max(2).step(0.001).onFinishChange(generateGalaxy)
gui.add(parameters, "randomnessPower").min(1).max(10).step(0.001).onFinishChange(generateGalaxy)
gui.addColor(parameters, "insideColor").onFinishChange(generateGalaxy)
gui.addColor(parameters, "outsideColor").onFinishChange(generateGalaxy)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth*0.9,
    height: window.innerHeight+10
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth*0.9
    sizes.height = window.innerHeight+10

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 3
camera.position.y = 3
camera.position.z = 6.3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enableZoom = false

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //Update galaxy1
    points.rotation.y = elapsedTime*0.2
    

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
///////////////////////////////////////////////////


/**
 * Canvas2
 */
/**
 * Base
 */

// Canvas
const canvas2 = document.querySelector('canvas.webgl2')

// Scene
const scene2 = new THREE.Scene()

/**
 * Textures 
*/
const textureLoader2 = new THREE.TextureLoader()

const colorTexture1 = textureLoader2.load("/textures/1/1_basecolor.jpg")
const ambientOcclusionTexture1 = textureLoader2.load("/textures/1/1_ambientOcclusion.jpg")
const heightTexture1 = textureLoader2.load("/textures/1/1_height.png")
const metallicTexture1 = textureLoader2.load("/textures/1/1_metallic.jpg")
const normalTexture1 = textureLoader2.load("/textures/1/1_normal.jpg")
const roughnessTexture1 = textureLoader2.load("/textures/1/1_roughness.jpg")

/**
 * Cube
 */
const cubeGeometry = new THREE.BoxGeometry(2.5, 2.5, 2.5, 15, 15, 15)
const cubeMaterial = new THREE.PointsMaterial()
const cube = new THREE.Points(cubeGeometry, cubeMaterial)
cubeMaterial.size = 0.02
cubeMaterial.sizeAttenuation = true

cubeMaterial.depthWrite= false
cubeMaterial.blending= THREE.AdditiveBlending
cubeMaterial.vertexColors = true
// cubeMaterial.map = colorTexture1
// cubeMaterial.displacementMap = heightTexture1
// cubeMaterial.displacementScale = 0.005
// cubeMaterial.aoMap = ambientOcclusionTexture1
// cubeMaterial.normalMap = normalTexture1
// cubeMaterial.roughnessMap = roughnessTexture1
// cubeMaterial.metalnessMap = metallicTexture1

cubeGeometry.setAttribute("uv2", new THREE.BufferAttribute(cubeGeometry.attributes.uv.array, 2))

const colors = new Float32Array(15*15*15*15)

const colorInside = new THREE.Color("purple")
const colorOutside = new THREE.Color("blue")

for (let i = 0; i < 15*15*15*15; i++) {
    const i3 = i*3

    //Colors
    const mixedColor = colorInside.clone()
    mixedColor.lerp(colorOutside, Math.random())

    colors[i3+0] = mixedColor.r
    colors[i3+1] = mixedColor.g
    colors[i3+2] = mixedColor.b
    
}
cubeGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

scene2.add(cube)

/**
 * Lights
 */


/**
 * Sizes
 */
const sizes2 = {
    width: window.innerWidth*0.9,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes2.width = window.innerWidth*0.9
    sizes2.height = window.innerHeight

    // Update camera
    camera2.aspect = sizes2.width / sizes2.height
    camera2.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes2.width, sizes2.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera2 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera2.position.x = 3
camera2.position.y = 3
camera2.position.z = 3
scene2.add(camera)

// Controls
const controls2 = new OrbitControls(camera2, canvas2)
controls2.enableDamping = true
controls2.enableZoom = false

/**
 * Renderer
 */
const renderer2 = new THREE.WebGLRenderer({
    canvas: canvas2
})
renderer2.setSize(sizes2.width, sizes2.height)
renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock2 = new THREE.Clock()

const tick2 = () =>
{
    const elapsedTime = clock2.getElapsedTime()

    //Update cube
    cube.rotation.z = elapsedTime*0.5
    cube.rotation.x = elapsedTime*0.5
    

    // Update controls
    controls2.update()

    // Render
    renderer2.render(scene2, camera2)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick2)
}

tick2()

///////////////
/**
 * Gsap
 */

const tl = gsap.timeline()

tl.from("nav", {
    opacity:0,
    y: -200,
    duration: 1,
    stagger: true
})
tl.from(".p1h, .p1d, .readMore", {
    opacity:0,
    y: -100,
    duration: 1,
    stagger: 0.3
})
tl.from(".p1r",{
    opacity:0,
    y:200,
    duration:1
})
gsap.from(".p2h", {
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger:".readMore",
        scroller:"body",
        // markers:true,
        start:"-100% top",
        end:"400% top",
        scrub: 1
    }
})
gsap.from(".p3h, .p3d, .p3h2", {
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:".webgl",
        scroller:"body",
        // markers:true,
        start:"70% top",
        end:"100% top",
        scrub: 1
    }
})
gsap.from(".p3ibox", {
    scale:0.5,
    y:300,
    scrollTrigger:{
        trigger:".webgl",
        scroller:"body",
        // markers:true,
        start:"70% top",
        end:"100% top",
        scrub: 1
    }
})
