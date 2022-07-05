import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
// import ReactGlobe from "react-globe.gl";
import * as THREE from 'three';
// import { Plane, Scene, TubeGeometry } from "three";
import {Canvas, useFrame} from '@react-three/fiber';
import styled from "styled-components"
import Earth from "./Earth";
import {Text ,Stars, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import Graph from "./Graph";
import { GridHelper } from "three";
import Space from "./Space";

const Container = styled.div`
width:"50%";
height:1200px;
background-color::"red";
`

const SubContainer = styled.div`
width:"50%";
height:1200px;
background-color::"red";
`

const Ea = styled.h1`
color: "red";
font-size:"100px";
`


const textProps = {
  fontSize: 3.9,
  display:"flex",
  font: 'http://fonts.gstatic.com/s/modak/v5/EJRYQgs1XtIEskMA-hI.woff'
}

function Title({ layers = undefined, ...props }) {
  const group = useRef()
  useEffect(() => {
    group.current.lookAt(0, 0, 0)
  }, [])

  return (
    <group {...props} ref={group}>
      <Text  depthTest={false} material-toneMapped={false} {...textProps} layers={layers}>
        Hello World
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


  const [value , setValue] = useState(true);

  const handleClick = () =>{
    alert(123)
    if(value){
      setValue(false);
    }else{
      setValue(true)
    }      
  }


  return (
<> 
<Container>
        <Canvas >
          <Stars color="orange" />
            <Suspense fallback={null}>

                <ambientLight intensity={0.4} />
            </Suspense>
             <Title position={[10, 10, 10]}/>

             <Space oposition={[10, 10, 10]}/>

              {value ? 
                <Earth onClikck ={(handleClick)}  position={[1.5, 10, 10]} />
                :
                <Earth onClikck ={handleClick}  position={[50, 10, 10]} />
            }

             


        </Canvas>
  </Container> 
</>
        
  );
}

export default App;
