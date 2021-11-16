import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Img from "gatsby-image"
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
  //const pathToImage = getImage(image)
  // const [open, setOpen] = useState(false)
  // const [path, setPath] = useState(false)
  // const [loading, setLoading] = useState(false)
  function wcut(origin) {
    return wordCut(origin, 40, "", "...")
  }

  // const handleClose = () => {
  //   setOpen(false)
  // }
  const urlarr1 = location.pathname.split("/")
  const urlarr = pathClean(urlarr1)

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
                <Img
                  className="interestimg"
                  fluid={featureImage.childImageSharp.fluid}
                />
              </article>
              <article>
                {videoSourceURL && (
                  <Video videoSrcURL={videoSourceURL} videoTitle={videoTitle} />
                )}
              </article>
              <article>
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
              </div>
              <div className="toc">
                <h6>github</h6>
                <div className="content1">
                  <a href={github} target="showsite" title={github}>
                    {wcut(github)}
                  </a>
                </div>
                <h6>npm</h6>
                <div className="content1">
                  <a href={npmorg} target="showsite" title={npmorg}>
                    {wcut(npmorg)}
                  </a>
                </div>
                <h6>demo</h6>
                <div className="content1">
                  <a href={demo} target="showsite" title={demo}>
                    {wcut(demo)}
                  </a>
                </div>
                <h6>youtube</h6>
                {videoTitle &&
                  videoTitle.split(";").map((title, j) => {
                    return (
                      <div className="content">
                        <a href={`#showyoutube_${j}`}>{title}</a>
                      </div>
                    )
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

export default WorkDetail
