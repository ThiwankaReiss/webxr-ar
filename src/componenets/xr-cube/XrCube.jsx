import React from 'react'
import { useFrame } from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei"
import { useRef } from 'react'
const XrCube = () => {
  const cubeRef= useRef();
  
      useFrame((state, delta, xrFrame) => {
          cubeRef.current.rotation.y+=delta;
      })
      return (
          <>
  
              <OrbitControls />
              <ambientLight />
              <mesh ref={cubeRef} position-z={-5}>
                  <boxGeometry args={[2,2,2]} />
                  <meshStandardMaterial color={"mediumpurple"} />
              </mesh>
          </>
      )
}

export default XrCube