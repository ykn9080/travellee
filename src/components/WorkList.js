import React from "react"
import Img from "gatsby-image"
import { wordCut } from "../utility"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import "../css/main.css"

const WorkList = ({ data, type }) => {
  console.log(data)
  const list = data.map(dt => {
    return { title: dt.frontmatter.title, slug: dt.frontmatter.slug }
  })

  const WkList = ({ data }) => {
    return (
      <div className="worklist">
        {data.map(dt => {
          return (
            <div className="content">
              <div className="Img2div">
                <Img
                  className="Img1"
                  fluid={dt.frontmatter.thumb.childImageSharp.fluid}
                />
              </div>
              <div>
                <Link
                  to={`/${dt.frontmatter.type}s/${dt.frontmatter.slug}`}
                  key={dt.title}
                  state={{ list: list }}
                >
                  <h5>{dt.frontmatter.title}</h5>
                </Link>
                <p title={dt.frontmatter.excerpt}>
                  {wordCut(dt.frontmatter.excerpt, 180, "", "...")}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  const InterestList = ({ data }) => {
    return (
      <div className="interestlist">
        {data.map(dt => {
          return (
            <Link
              to={`/${dt.frontmatter.type}s/${dt.frontmatter.slug}`}
              key={dt.title}
              state={{ list: list }}
            >
              <Img
                className="imgInterest"
                fluid={dt.frontmatter.thumb.childImageSharp.fluid}
              />
              <h5>{dt.frontmatter.title}</h5>
            </Link>
          )
        })}
      </div>
    )
  }

  return type === "work" ? <WkList data={data} /> : <InterestList data={data} />
}

export default WorkList
