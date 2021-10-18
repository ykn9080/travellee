import * as React from "react"
import { graphql, Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import * as styles from "../css/works.module.css"
import Img from "gatsby-image"
import { wordCut } from "../utility"

const InterestList = ({ data, location }) => {
  console.log(data, styles)
  const interests = data.allMdx.nodes

  return (
    <Layout>
      <Seo title="Interest List" />
      <Breadcrumb
        location={location}
        crumbLabel="Interest"
        crumbStyle={{ color: "#666" }}
        crumbActiveStyle={{ color: "orange" }}
      />
      <div className={styles.portfolio}>
        <h2>Interest List</h2>
        <h3>What I am usually using or interested</h3>
      </div>
      <div className={styles.work}>
        {interests.map(interest => {
          return (
            <div>
              <Link
                to={`/interests/${interest.frontmatter.slug}`}
                key={interest.title}
              >
                <h4>{interest.frontmatter.title}</h4>
                <Img
                  className={styles.Img1}
                  fluid={interest.frontmatter.thumb.childImageSharp.fluid}
                />
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
