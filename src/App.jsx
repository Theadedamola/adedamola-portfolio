import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import About from './Pages/About'
import Work from './Pages/Work'
import Design from './Pages/Design'
import FrontendDetails from './Components/FrontendDetails/FrontendDetails'
import DesignDetails from './Components/DesignDetails/DesignDetails'
import Frontend from './Pages/frontend'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />}>
          <Route path=":design" element={<Design />}>
            <Route path=":designdetails" element={<DesignDetails />} />
          </Route>
          <Route path=":frontend" element={<Frontend />}>
            <Route path=":frontenddetails" element={<FrontendDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
