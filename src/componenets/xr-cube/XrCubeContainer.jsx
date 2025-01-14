import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from '@react-three/xr'
import XrCube from "./XrCube";

const store = createXRStore()
const XrCubeContainer = () => {

    // const store = createXRStore()

    return (
        <>
            <button onClick={() => store.enterAR()}>Enter AR</button>
            <Canvas>
                <XR store={store}>
                    <XrCube />
                </XR>
            </Canvas>
        </>

    )
}

export default XrCubeContainer