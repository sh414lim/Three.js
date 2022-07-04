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




const SideEarth = (props) =>{
    const [colorMap,normalMap,specularMap,cloudsMap] = useLoader(TextureLoader,[EarthDayMap,EarthNormalMap,EarthSpecularMap,EarthCloudsMap])
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0.008))
    const ref = useRef()

    return(
      <>
        {/* 주변 조명 */}
        <ambientLight intensity={1}/> 
        <mesh 
        {...props}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
             >
        <sphereGeometry args={[1.5,25,25]}/>
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
        </mesh>
      </>
    )
}

export default SideEarth;