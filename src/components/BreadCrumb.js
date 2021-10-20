import React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from "antd"

const BreadCrumb = props => {
  console.log(props.pathname)
  const pathlist = props?.pathname?.split("/") || []
  let pathadd = "/"
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {pathlist.map((k, i) => {
        pathadd = `${pathadd}/${k}`
        return (
          <Breadcrumb.Item>
            <Link to={pathadd} key={k}>
              {k}
            </Link>
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default BreadCrumb
