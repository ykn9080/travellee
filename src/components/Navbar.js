import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import $ from "jquery"
import { FiAlignJustify } from "react-icons/fi"
import { FaMoon, FaSun } from "react-icons/fa"
import { useColorMode } from "theme-ui"
import { LocalizedLink, LocalesList } from "gatsby-theme-i18n"
import { setCookie } from "../utility"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [show, setShow] = useState(false)
  const [showLang, setShowLang] = useState(false)
  const [lang, setLang] = useState()
  const [theme, setTheme] = useState("moon")

  const themeChange = () => {
    document.body.classList.toggle("dark-theme")
    setColorMode(colorMode === "default" ? "dark" : "default")
    if (theme === "moon") {
      setTheme("sun")
    } else {
      setTheme("moon")
    }
  }
  useEffect(() => {
    const ctheme = document.body.classList.contains("dark-theme")
    setColorMode(colorMode === "default" ? "dark" : "default")
    if (ctheme) {
      setTheme("sun")
      setColorMode("dark")
    }
    setLang("en")
    $(document).click(event => {
      if (!$(event.target).closest(".flags").length) {
        setShowLang(false)
      } else setShowLang(true)
    })
  }, [])
  const selLang = lang => {
    console.log(lang)
    setCookie("mylanguage", lang)
    setLang(lang)
    setShowLang(false)
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <LocalizedLink to="/">
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
            </LocalizedLink>
            <button className="nav-btn" onClick={() => setShow(!show)}>
              <FiAlignJustify />
            </button>
          </div>
          <div className={show ? "nav-links show-links" : "nav-links"}>
            <LocalizedLink
              to="/"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              home
            </LocalizedLink>

            <LocalizedLink
              to="/works"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              works
            </LocalizedLink>
            <LocalizedLink
              to="/interests"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              interests
            </LocalizedLink>

            <LocalizedLink
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              about
            </LocalizedLink>
            <div
              style={{ marginTop: 5 }}
              className="nav-link theme-link shrink"
            >
              {theme === "moon" ? (
                <FaMoon onClick={themeChange} />
              ) : (
                <FaSun onClick={themeChange} />
              )}
            </div>
            <div className="nav-link theme-link shrink">
              <div
                className="flags"
                onClick={() => {
                  setShowLang(!showLang)
                }}
              >
                {lang === "en" ? (
                  <StaticImage
                    width={25}
                    src="../images/isoflag/us.png"
                    alt="English"
                  />
                ) : (
                  <StaticImage
                    width={25}
                    src="../images/isoflag/kr.png"
                    alt="Korean"
                  />
                )}
              </div>
              {showLang && (
                <div id="dvLang">
                  <Link to="/en" hrefLang="en" onClick={() => selLang("en")}>
                    <StaticImage
                      className="flagimg"
                      src="../images/isoflag/us.png"
                      alt="English"
                    />
                    English
                  </Link>

                  <Link to="/" hrefLang="ko" onClick={() => selLang("ko")}>
                    <StaticImage
                      className="flagimg"
                      src="../images/isoflag/kr.png"
                      alt="Korean"
                    />
                    한국어
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
const Flags = () => {
  return (
    <div>
      <div className="sel1">
        <ul>
          <li values="1" className="opt">
            <Link
              to="/en"
              hrefLang="en"
              onClick={() => setCookie("mylanguage", "en")}
            >
              <StaticImage src="../images/isoflag/us.png" alt="English" />
              English
            </Link>
          </li>
          <li values="2" className="opt">
            <Link
              to="/"
              hrefLang="ko"
              onClick={() => setCookie("mylanguage", "ko")}
            >
              <StaticImage src="../images/isoflag/kr.png" alt="Korean" />
              Korean
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
