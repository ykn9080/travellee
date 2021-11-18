import * as React from "react"
import { graphql } from "gatsby"
import Breadcrumb from "../components/BreadCrumb"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { wordCut } from "../utility"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

const InterestList = ({ data, location }) => {
  const intl = useIntl()
  const interests = data.allMdx.nodes
  const list = interests.map(work => {
    return { title: work.frontmatter.title, slug: work.frontmatter.slug }
  })

  return (
    <Layout>
      <Seo title="Interest List" />
      <Breadcrumb location={location} />
      <main>
        <header>
          <h1>{intl.formatMessage({ id: "interest-head" })}</h1>
          <p>{intl.formatMessage({ id: "interest-sub" })}</p>
        </header>
        <section className="bodycontent">
          {interests.map(interest => {
            return (
              <div className="ImgContainer">
                <Link
                  to={`/interests/${interest.frontmatter.slug}`}
                  key={interest.title}
                  state={{ list: list }}
                >
                  <div>
                    <GatsbyImage image={getImage(interest.frontmatter.thumb)} />
                  </div>
                  <h2>{interest.frontmatter.title}</h2>
                  <p title={interest.frontmatter.excerpt}>
                    {wordCut(interest.frontmatter.excerpt, 80, "", "...")}
                  </p>
                </Link>
              </div>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query MyInterest($locale: String!) {
    allMdx(
      filter: {
        fields: { locale: { eq: $locale } }
        frontmatter: { type: { eq: "interest" } }
      }
    ) {
      nodes {
        frontmatter {
          title
          demo
          videoTitle
          videoSourceURL
          thumb {
            childImageSharp {
              gatsbyImageData(
                width: 400
                blurredOptions: { width: 50 }
                placeholder: BLURRED
              )
            }
          }
          slug
          seq
          npmorg
          github
          excerpt
          type
        }
      }
    }
  }
`
export default InterestList
