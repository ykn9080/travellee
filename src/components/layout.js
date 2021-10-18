import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock"

import "../css/main.css"

const Layout = ({ children }) => {
  const components = {
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
