import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import BreadCrumb from "./BreadCrumb"
import { ThemeProvider } from "theme-ui"
// import { MDXProvider } from "@mdx-js/react"
// import CodeBlock from "./CodeBlock"

import "../css/main.css"

const Layout = ({ children }) => {
  // const CustomWrapper = props => (
  //   <div {...props} style={{ padding: "2000px" }}></div>
  // )
  // const PracticeSchedule = () => {
  //   ;<div styles={{ gridColumn: "full" }}>Your Full Width Content</div>
  // }
  // const components = {
  //   pre: props => <div {...props} />,
  //   code: CodeBlock,
  // }
  const theme1 = {
    main: "darkorange",
  }
  return (
    <div>
      {/* <MDXProvider components={{ ...components, PracticeSchedule }}> */}
      <ThemeProvider theme={theme1}>
        <Navbar />
        <BreadCrumb />
        {children}
        <Footer />
        {/* </MDXProvider> */}
      </ThemeProvider>
    </div>
  )
}

export default Layout
