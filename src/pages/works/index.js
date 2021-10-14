import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import * as styles from "../../css/works.module.css"
import Img from "gatsby-image"
import { wordCut } from "../../utility"

const WorkList = ({ data }) => {
  console.log(data, styles)
  const works = data.allMdx.nodes

  return (
    <Layout>
      <Seo title="Work List" />
      <div className={styles.portfolio}>
        <h2>Work List</h2>
        <h3>Project & Modules I've created</h3>
      </div>
      <div className={styles.work}>
        {works.map(work => {
          return (
            <div>
              <Link to={`/works/${work.frontmatter.slug}`} key={work.title}>
                <h3>{work.frontmatter.title}</h3>
                <Img
                  className={styles.Img1}
                  fluid={work.frontmatter.thumb.childImageSharp.fluid}
                />
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
  query Myworks {
    allMdx {
      nodes {
        frontmatter {
          slug
          excerpt
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        body
      }
    }
  }
`
export default WorkList
