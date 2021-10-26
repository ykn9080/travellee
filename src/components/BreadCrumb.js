import React from "react"
import { LocalizedLink as Link } from "gatsby-theme-i18n"

const BreadCrumb = ({ location }) => {
  const pathlist = location?.pathname?.split("/") || []
  const lastindx = pathlist.length - 1
  console.log(pathlist)
  if (pathlist[lastindx] === "") pathlist.splice(lastindx, 1)
  let pathadd = "",
    linkadd = ""
  return (
    <ul className="breadcrumbs">
      {pathlist.map((k, i) => {
        if (["ko", "en"].indexOf(k) > -1) return
        if (k === "") {
          pathadd = "Home"
          linkadd = "/"
        } else {
          pathadd = `${k}`
          linkadd = `${linkadd}${k}/`
        }

        return i === pathlist.length - 1 ? (
          <li>{pathadd}</li>
        ) : (
          <li>
            <Link to={linkadd} key={k}>
              {pathadd}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default BreadCrumb
