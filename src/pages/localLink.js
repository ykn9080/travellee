import * as React from "react"
import { LocalizedLink as Link } from "gatsby-theme-i18n"

const Example = () => {
  return (
    <div>
      <Link to="/">home</Link>

      <Link to="/works">works</Link>
      <Link to="/interests">interests</Link>
    </div>
  )
}

export default Example
