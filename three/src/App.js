import React, { useEffect, useRef } from "react";
import ReactGlobe from "react-globe.gl";
import * as THREE from 'three';
import { Plane, Scene } from "three";


export const Init = () =>{
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45,window.innerHeight/window.innerHeight,0,1,1000);
  var renderer  = new THREE.WebGL1Renderer();
  renderer.setClearColor(0xEEEEEE);
  renderer.setSize(window.innerWidth,window.innerHeight);
  
  var axes = new THREE.AxesHelper(20);
  scene.add(axes);

  var planeGeometry = new THREE.PlaneGeometry(60,20,1,1);
  var planeMaterial = new THREE.PointsMaterial({color:0xcccccc});
  var plane = new THREE.Mesh(planeGeometry,planeMaterial);

  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  scene.add(plane);

  var cubeGeometry = new THREE.BoxGeometry(4,4,4);
  var cubeMaterial = new THREE.MeshBasicMaterial({color:0xff0000,
  wireframe : true});

  var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);

  cube.position.x =  -4 ;
  cube.position.y = 3;
  cube.position.z = 0;

  scene.add(cube);

  var sphereGeometry = new THREE.SphereGeometry(4,20,20);
  var spereMaterial = new THREE.MeshBasicMaterial({color:0x7777ff,
  wireframe:true
  });

  var sphere = new THREE.Mesh(sphereGeometry,spereMaterial);

  sphere.position.x =  -4 ;
  sphere.position.y = 3;
  sphere.position.z = 0;

  scene.add(sphere);

  camera.position.x =  -30;
  camera.position.y = 40;
  camera.position.z = 30;
  camera.lookAt(scene.position);
  

  return(
      <div>
          {renderer.render(scene,camera)}
      </div>
  )
};

function App() {
  
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45,window.innerHeight/window.innerHeight,0.1,1000);
  

  // useEffect(()=>{
  //   var webGl = useRef();
  //   webGl.current.focus();
  // },[])

  


//  init();

  return (
    <div id="WebGl" >
        <Init/>
    </div>  
  );
}

export default App;
