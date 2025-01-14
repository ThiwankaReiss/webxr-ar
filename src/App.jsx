import { Route, Routes } from "react-router-dom"
import './App.css'
import CubeContainer from "./componenets/cube/CubeContainer"

import XrCubeContainer from "./componenets/xr-cube/XrCubeContainer"

function App() {

  return (
    <Routes>
      <Route path="/webxr-ar" element={<XrCubeContainer />} />
      <Route path="/webxr-ar/cube" element={<CubeContainer />} />
      <Route path="/webxr-ar/xr-cube" element={<XrCubeContainer />} />
    </Routes>
  )
}

export default App
