import React from 'react'
import { useFrame } from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei"
import { useRef } from 'react'
const Cube = () => {
    const cubeRef= useRef();

    useFrame((state, delta, xrFrame) => {
        cubeRef.current.rotation.y+=delta;
    })
    return (
        <>

            <OrbitControls />
            <ambientLight />
            <mesh ref={cubeRef}>
                <boxGeometry />
                <meshStandardMaterial color={"mediumpurple"} />
            </mesh>
        </>
    )
}

export default Cube