import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Samples from "./pages/Samples"
import Navbar from "./components/Navbar"
import "./styles/main.css"

export default function App(){
  return (
    <div className="app-container">
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Samples/*" element={<Samples />} />
        </Route>
      </Routes>
    </div>
  )
}