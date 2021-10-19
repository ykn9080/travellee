import * as React from "react"
import { graphql, Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Img from "gatsby-image"
import { wordCut } from "../utility"

const InterestList = ({ data, location }) => {
  const interests = data.allMdx.nodes

  return (
    <Layout>
      <Seo title="Interest List" />
      <Breadcrumb location={location} crumbLabel="Interest" />
      <div className="headtitle">
        <h3>Interest List</h3>
        <p>What I am usually using or interested</p>
      </div>
      <div className="bodycontent">
        {interests.map(interest => {
          return (
            <div className="ImgContainer">
              <Link
                to={`/interests/${interest.frontmatter.slug}`}
                key={interest.title}
              >
                <div className="Img2div">
                  <Img
                    className="Img2"
                    fluid={interest.frontmatter.thumb.childImageSharp.fluid}
                  />
                </div>
                <h5>{interest.frontmatter.title}</h5>
                <p title={interest.frontmatter.excerpt}>
                  {wordCut(interest.frontmatter.excerpt, 80, "", "...")}
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
  query MyInterest {
    allMdx(filter: { frontmatter: { type: { eq: "interest" } } }) {
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
          github
          excerpt
        }
        body
      }
    }
  }
`
export default InterestList
