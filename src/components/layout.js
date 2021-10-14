import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "./CodeBlock"

import "normalize.css"
import "../css/main.css"

const Layout = ({ children }) => {
  const MyParagraph = props => (
    <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
  )
  const components = {
    h1: props => <h1 style={{ color: "tomato" }} {...props} />,
    p: MyParagraph,
    pre: props => <div {...props} />,
    code: CodeBlock,
  }

  return (
    <div>
      <MDXProvider components={components}>
        <Navbar />
        {children}
        <Footer />
      </MDXProvider>
    </div>
  )
}

export default Layout
