import React from 'react'
import {OrbitControls} from "@react-three/drei"
import {Canvas} from "@react-three/fiber"
const CubeContainer = () => {
  return (
    <Canvas>
        <OrbitControls/>
        <ambientLight/>
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial color={"mediumpurple"}/>
        </mesh>
    </Canvas>
  )
}

export default CubeContainer