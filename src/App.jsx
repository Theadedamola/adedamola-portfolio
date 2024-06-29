import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import About from './Pages/About'
import Design from './Pages/Design'
import FrontendDetails from './Components/FrontendDetails/FrontendDetails'
import Frontend from './Pages/frontend'
import Casestudy from './Pages/Casestudy'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/design" element={<Design />}>
        </Route>
        <Route path="/design" element={<Casestudy />}>
          <Route path=":designdetails" element={<Casestudy />} />
        </Route>
        <Route path="/frontend" element={<Frontend />}>
          <Route path=":frontenddetails" element={<FrontendDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
