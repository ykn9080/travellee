import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import { FaMoon, FaSun } from "react-icons/fa"
import logo from "../images/clogo.png"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [theme, setTheme] = useState("moon")
  const themeChange = () => {
    document.body.classList.toggle("dark-theme")
    if (theme === "moon") {
      setTheme("sun")
    } else {
      setTheme("moon")
    }
  }
  useEffect(() => {
    const ctheme = document.body.classList.contains("dark-theme")
    if (ctheme) setTheme("sun")
  }, [])
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              {/* <img src={logo} alt="youngki nam" /> */}
              <span
                style={{
                  fontFamily: "Yeseva One",
                  color: "white",
                  fontSize: 30,
                }}
              >
                Young
              </span>
            </Link>
            <button className="nav-btn" onClick={() => setShow(!show)}>
              <FiAlignJustify />
            </button>
          </div>
          <div className={show ? "nav-links show-links" : "nav-links"}>
            <Link
              to="/"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              home
            </Link>

            <Link
              to="/works"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              works
            </Link>
            <Link
              to="/interests"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              interests
            </Link>

            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              about
            </Link>
            <div className="nav-link theme-link">
              {theme === "moon" ? (
                <FaMoon onClick={themeChange} />
              ) : (
                <FaSun onClick={themeChange} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
