import React, { Suspense, useEffect, useMemo, useRef } from "react";
// import ReactGlobe from "react-globe.gl";
import * as THREE from 'three';
// import { Plane, Scene, TubeGeometry } from "three";
import {Canvas, useFrame} from '@react-three/fiber';
import styled from "styled-components"
import Earth from "./Earth";
import {Text ,Stars } from "@react-three/drei";
import Graph from "./Graph";

const Container = styled.div`
width:"100%";
height:1200px;
background-color::"red";
`

const Ea = styled.h1`
color: "red";
font-size:"100px";
`


const textProps = {
  fontSize: 3.9,
  font: 'http://fonts.gstatic.com/s/modak/v5/EJRYQgs1XtIEskMA-hI.woff'
}

function Title({ layers = undefined, ...props }) {
  const group = useRef()
  useEffect(() => {
    group.current.lookAt(0, 0, 0)
  }, [])

  return (
    <group {...props} ref={group}>
      <Text depthTest={false} material-toneMapped={false} {...textProps} layers={layers}>
        Hello
      </Text>
    </group>
  )
}

function TitleCopies({ layers }) {
  const vertices = useMemo(() => {
    const y = new THREE.IcosahedronGeometry(12)
    return y.vertices
  }, [])

  return (
    <group name="titleCopies">
      { vertices.map((vertex, i) => (
        <Title name={'titleCopy-' + i} position={vertex} layers={layers} />
      ))}
    </group>
  )
}



const Scene = () => {
  return (
    <group name="sceneContainer">
      <TitleCopies />
    </group>
  )
}


function App() {


  return (
<> 
<Container>
        <Canvas  >
          <Suspense fallback={null}>
              <Earth/>
            <Stars color="orange" />
            </Suspense>

          <group name="sceneContainer">
             <Title   />
         </group>
      <ambientLight intensity={0.4} />
            
        </Canvas>
    </Container> 
</>
        
  );
}

export default App;
