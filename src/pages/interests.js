import * as React from "react"
import { graphql } from "gatsby"
import Breadcrumb from "../components/BreadCrumb"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Img from "gatsby-image"
import { wordCut } from "../utility"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

const InterestList = ({ data, location }) => {
  const intl = useIntl()
  const interests = data.allFile.nodes
  const list = interests.map(({ childMdx: work }) => {
    return { title: work.frontmatter.title, slug: work.frontmatter.slug }
  })

  return (
    <Layout>
      <Seo title="Interest List" />
      <Breadcrumb location={location} />
      <div className="headtitle">
        <h3 style={{ fontWeight: 900 }}>Interest List</h3>
        <p>{intl.formatMessage({ id: "interest-sub" })}</p>
      </div>
      <div className="bodycontent">
        {interests.map(({ childMdx: interest }) => {
          return (
            <div className="ImgContainer">
              <Link
                to={`/interests/${interest.frontmatter.slug}`}
                key={interest.title}
                state={{ list: list }}
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
  query MyInterest($locale: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "interests" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      nodes {
        childMdx {
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
        }
      }
    }
  }
`
export default InterestList
