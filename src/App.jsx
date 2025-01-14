import {Route, Routes} from "react-router-dom"
import './App.css'
import CubeContainer from "./componenets/cube/CubeContainer"

function App() {
 
  return (
    <Routes>
      <Route path="/webxr-ar" element={<CubeContainer/>}/>
        
    </Routes>
  )
}

export default App
