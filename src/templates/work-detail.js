import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Breadcrumb from "../components/BreadCrumb"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import Video from "../components/Video"
import { wordCut, pathClean } from "../utility"

const WorkDetail = ({ data, location }) => {
  const {
    title,
    excerpt,
    featureImage,
    videoSourceURL,
    videoTitle,
    github,
    npmorg,
    demo,
  } = data.mdx.frontmatter

  function wcut(origin) {
    return wordCut(origin, 40, "", "...")
  }

  const urlarr1 = location.pathname.split("/")
  const urlarr = pathClean(urlarr1)
  const sideItems = [
    { title: "github", url: github },
    { title: "npm", url: npmorg },
    { title: "demo", url: demo },
  ]
  return (
    <>
      <Layout>
        <Seo title={title} />
        <Breadcrumb location={location} />
        <main>
          <header>
            <h1>{title}</h1>
          </header>
          <div className="work">
            <section>
              <article className="gridtwo">
                <p>{excerpt}</p>
                {/* <GatsbyImage
                  className="interestimg"
                  fluid={featureImage.childImageSharp.fluid}
                /> */}
                <GatsbyImage
                  className="interestimg"
                  image={getImage(featureImage)}
                />
              </article>
              <article>
                {videoSourceURL && (
                  <Video videoSrcURL={videoSourceURL} videoTitle={videoTitle} />
                )}
              </article>
              <article className="mdxrend">
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </article>
            </section>
            <section>
              <div className="sideList">
                <h6>Other List</h6>
                <ul>
                  {(location.state?.list || []).map((k, i) => {
                    const slug = `/${urlarr[1]}/${k.slug}`
                    let current = ""
                    if (urlarr[2] === k.slug) current = "selected"
                    return (
                      <li>
                        <Link
                          to={slug}
                          state={{ list: location.state.list }}
                          className={current}
                        >
                          {k.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                {sideItems.map((ah, i) => {
                  return (
                    <>
                      <h6>{ah.title}</h6>
                      <a href={ah.url} target="showsite" title={ah.url}>
                        {wcut(ah.url)}
                      </a>
                    </>
                  )
                })}
                <h6>youtube</h6>
                {videoTitle &&
                  videoTitle.split(";").map((title, j) => {
                    return <a href={`#showyoutube_${j}`}>{title}</a>
                  })}
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </>
  )
}

export const query = graphql`
  query DetailWork($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        title
        slug
        excerpt
        github
        npmorg
        demo
        videoSourceURL
        videoTitle
        featureImage {
          childImageSharp {
            gatsbyImageData(
              width: 300
              blurredOptions: { width: 50 }
              placeholder: BLURRED
            )
          }
        }
      }
      body
    }
  }
`

export default WorkDetail
