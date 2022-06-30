import React, { Suspense, useEffect, useRef, useState } from "react";
import ReactGlobe from "react-globe.gl";
import * as THREE from 'three';
import { Plane, Scene } from "three";
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls,Stars} from '@react-three/drei';
import styled from "styled-components"

const CanvasContaier = styled.div`
width:100%;
height:100%;
`


const Earth = (props) =>{
 return(
   <>
   <ambientLight intensity={0.6}/>
   <mesh>
     <sphereGeometry args={[1,32,32]}/>
     <meshPhongMaterial color="red"/>;
   </mesh>
   </>
 ) 
}



function App() {

//  init();

  return (
    <>
      <CanvasContaier>
        <Canvas>
          <Suspense fallback={null}>
            <Earth/>
            </Suspense>;
        </Canvas>
      </CanvasContaier>
    </>
        
  );
}

export default App;
