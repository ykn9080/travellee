import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import $ from "jquery"
import { FiAlignJustify } from "react-icons/fi"
import { FaMoon, FaSun } from "react-icons/fa"
import { useColorMode } from "theme-ui"
import { LocalizedLink } from "gatsby-theme-i18n"
import { setCookie, getCookie } from "../utility"
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
    let language = getCookie("mylanguage")
    if (!language) {
      language = navigator.language.substr(0, 2)
    }
    setLang(language)
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
  const krimg = (
    <StaticImage width={25} src="../images/isoflag/kr.png" alt="Korean" />
  )
  const usimg = (
    <StaticImage width={25} src="../images/isoflag/us.png" alt="English" />
  )
  const twimg = (
    <StaticImage width={25} src="../images/isoflag/tw.png" alt="Chinese" />
  )
  const krimg1 = (
    <StaticImage
      className="flagimg"
      width={25}
      src="../images/isoflag/kr.png"
      alt="Korean"
    />
  )
  const usimg1 = (
    <StaticImage
      className="flagimg"
      width={25}
      src="../images/isoflag/us.png"
      alt="English"
    />
  )
  const twimg1 = (
    <StaticImage
      className="flagimg"
      width={25}
      src="../images/isoflag/tw.png"
      alt="Chinese"
    />
  )
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <LocalizedLink to="/">
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
          <div
            style={{ position: "relative" }}
            className={show ? "nav-links show-links" : "nav-links"}
          >
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
                {lang === "en" ? usimg : lang === "tw" ? twimg : krimg}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {showLang && (
        <div id="dvLang">
          <Link
            to={`/en${window.location.pathname
              .replace("/en", "")
              .replace("/tw", "")}`}
            hrefLang="en"
            onClick={() => selLang("en")}
          >
            {usimg1}
            <span>English</span>
          </Link>
          <Link
            to={`${window.location.pathname
              .replace("/en", "")
              .replace("/tw", "")}`}
            hrefLang="ko"
            onClick={() => selLang("ko")}
          >
            {krimg1}
            <span>한국어</span>
          </Link>
          <Link
            to={`/tw${window.location.pathname
              .replace("/tw", "")
              .replace("/en", "")}`}
            hrefLang="tw"
            onClick={() => selLang("tw")}
          >
            {twimg1}
            <span>中國語</span>
          </Link>
        </div>
      )}
    </>
  )
}

export default Navbar
