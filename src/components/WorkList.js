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
      <>
        <section className="bodycontent">
          {data.map(work => {
            return (
              <div className="ImgContainer1">
                <Link
                  to={`/works/${work.frontmatter.slug}`}
                  key={work.title}
                  state={{ list: list }}
                >
                  <h1>{work.frontmatter.title}</h1>
                  <div className="Img2div">
                    <Img
                      className="Img1"
                      fluid={work.frontmatter.thumb.childImageSharp.fluid}
                    />
                  </div>
                  {/* <p title={work.frontmatter.excerpt}>
                    {wordCut(work.frontmatter.excerpt, 80, "", " ...")}
                  </p> */}
                </Link>
              </div>
            )
          })}
        </section>
      </>
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
              title={dt.frontmatter.title}
              state={{ list: list }}
            >
              <Img
                className="imgInterest"
                fluid={dt.frontmatter.thumb.childImageSharp.fluid}
              />
            </Link>
          )
        })}
      </div>
    )
  }

  return type === "work" ? <WkList data={data} /> : <InterestList data={data} />
}

export default WorkList
