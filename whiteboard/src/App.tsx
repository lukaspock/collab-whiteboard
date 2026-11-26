import { Routes, Route } from "react-router";

import './App.css'
import WelcomeScreen from "./Components/WelcomeScreen.tsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
    </Routes>
  )
}

export default App
