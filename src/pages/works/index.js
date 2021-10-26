import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import Breadcrumb from "../../components/BreadCrumb"
import Img from "gatsby-image"
import { wordCut, findLocale } from "../../utility"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

const WorkList = ({ data, location }) => {
  const intl = useIntl()
  const works = data.allFile.nodes
  const list = works.map(({ childMdx: work }) => {
    return { title: work.frontmatter.title, slug: work.frontmatter.slug }
  })

  return (
    <Layout>
      <Seo title="Work List" />
      <Breadcrumb location={location} />
      <div className="headtitle">
        <h3>Work List</h3>
        <p> {intl.formatMessage({ id: "work-sub" })}</p>
      </div>
      <div className="bodycontent">
        {works.map(({ childMdx: work }) => {
          // let locale = ""
          // if (work.fields.locale) locale = `/${work.fields.locale}`
          return (
            <div className="ImgContainer ImgLarge">
              <Link
                to={`/works/${work.frontmatter.slug}`}
                key={work.title}
                state={{ list: list }}
              >
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
  query hello($locale: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "works" }
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

export default WorkList
