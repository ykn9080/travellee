import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
// import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Breadcrumb from "../../components/BreadCrumb"
import Img from "gatsby-image"
import { wordCut } from "../../utility"

const WorkList = ({ data, location }) => {
  console.log(data)
  const works = data.allMdx.nodes

  return (
    <Layout>
      <Seo title="Work List" />
      <Breadcrumb location={location} crumbLabel="Work" />
      <div className="headtitle">
        <h3>Work List</h3>
        <p>Project & Modules I've created</p>
      </div>
      <div className="bodycontent">
        {works.map(work => {
          return (
            <div className="ImgContainer ImgLarge">
              <Link to={`/works/${work.frontmatter.slug}`} key={work.title}>
                <h4>{work.frontmatter.title}</h4>
                <div className="Img2div">
                  <Img
                    className="Img1"
                    fluid={work.frontmatter.thumb.childImageSharp.fluid}
                  />
                </div>
                <p title={work.frontmatter.excerpt}>
                  {wordCut(work.frontmatter.excerpt, 80, "", "...")}
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query MyWork {
    allMdx(filter: { frontmatter: { type: { eq: "work" } } }) {
      nodes {
        frontmatter {
          title
          demo
          videoTitle
          videoSourceURL
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          seq
          npmorg
          github
          excerpt
        }
        body
      }
    }
  }
`
export default WorkList
