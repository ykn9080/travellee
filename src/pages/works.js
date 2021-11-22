import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Breadcrumb from "../components/BreadCrumb"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { wordCut } from "../utility"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

const WorkList = ({ data, location }) => {
  const intl = useIntl()
  const works = data.allMdx.nodes
  const list = works.map(work => {
    return { title: work.frontmatter.title, slug: work.frontmatter.slug }
  })

  return (
    <Layout>
      <Seo title="Work List" />
      <Breadcrumb location={location} />
      <main>
        <header>
          <h1>{intl.formatMessage({ id: "work-head" })}</h1>
          <p> {intl.formatMessage({ id: "work-sub" })}</p>
        </header>
        <section className="bodycontent">
          {works.map(work => {
            return (
              <div className="ImgContainer ImgLarge ContanierBox">
                <Link
                  to={`/works/${work.frontmatter.slug}`}
                  key={work.title}
                  state={{ list: list }}
                >
                  <h2>{work.frontmatter.title}</h2>
                  <GatsbyImage image={getImage(work.frontmatter.thumb)} />

                  <p title={work.frontmatter.excerpt}>
                    {wordCut(work.frontmatter.excerpt, 80, "", " ...")}
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
  query hello($locale: String!) {
    allMdx(
      filter: {
        fields: { locale: { eq: $locale } }
        frontmatter: { type: { eq: "work" } }
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
                width: 360
                blurredOptions: { width: 50 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
                aspectRatio: 1.5
              )
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
`

export default WorkList
