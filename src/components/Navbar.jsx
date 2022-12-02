import React from "react"
import { Link, BrowserRouter, Outlet } from "react-router-dom"
import "../styles/navbar.css"

export default function Navbar() {
    return (
        <>
            <div className="navContainer">
                <div className="linksContainer">
                    <Link to="/" className="navLink" id="navHome" >خانه</Link>
                    <Link to="/About" className="navLink" id="navAbout" >درباره ما</Link>
                    <Link to="/Contact" className="navLink" id="navContact" >تماس با ما</Link>
                    <Link to="/Samples/*" className="navLink" id="navSkills" >نمونه کار ها</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}