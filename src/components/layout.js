import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import "../css/main.css"

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Layout
