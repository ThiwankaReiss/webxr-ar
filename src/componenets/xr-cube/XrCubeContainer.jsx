import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from '@react-three/xr'
import XrCube from "./XrCube";


const XrCubeContainer = () => {

    // const store = createXRStore()
    const store = createXRStore()
    return (
        <>
            <button onClick={() =>
                store.enterAR().catch(error => alert(`Error entering AR: ${error.message}`))
            }>
                Enter AR
            </button>
            <Canvas>
                <XR store={store}>
                    <XrCube />
                </XR>
            </Canvas>
        </>

    )
}

export default XrCubeContainer