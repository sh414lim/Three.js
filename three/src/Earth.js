import React, { useRef, useState } from "react";
import EarthDayMap from "./assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "./assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "./assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "./assets/textures/8k_earth_clouds.jpg";
import { useFrame, useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";
import * as THREE from "three";

// 궤도 설정
import {OrbitControls } from  "@react-three/drei";




const Earth = (props) =>{
    const [colorMap,normalMap,specularMap,cloudsMap] = useLoader(TextureLoader,[EarthDayMap,EarthNormalMap,EarthSpecularMap,EarthCloudsMap])
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)


    useFrame((state, delta) => (ref.current.rotation.y += 0.005))
    useFrame((state, delta) => (mainRef.current.rotation.y += 0.005))
    const ref = useRef()
    const mainRef = useRef();

    return(
      <>
        {/* 주변 조명 */}
        <ambientLight intensity={1}/> 
        <mesh 
        {...props}
        ref={ref}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
             >
        <sphereGeometry args={[1.7,29,29]}/>
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
        </mesh>
        <mesh 
        {...props}
        ref={mainRef}
        scale={clicked ? 1 : 1}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        >
            <sphereGeometry args={[1.7,29,29]}/>
            <meshPhongMaterial  specularMap={specularMap}/>
            <meshStandardMaterial map={colorMap} normalMap={normalMap}  />;
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}  />

        </mesh>
      </>
    )
}

export default Earth;