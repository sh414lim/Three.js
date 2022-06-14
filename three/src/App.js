import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";

function App() {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereBufferGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}

export default App;
