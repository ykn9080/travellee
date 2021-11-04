import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Img from "gatsby-image"
import Breadcrumb from "../components/BreadCrumb"

import { LocalizedLink as Link } from "gatsby-theme-i18n"
// import { Button, Spin } from "antd"
// import { makeStyles } from "@material-ui/core/styles"
// import Dialog from "@material-ui/core/Dialog"
// import AppBar from "@material-ui/core/AppBar"
// import Toolbar from "@material-ui/core/Toolbar"
// import IconButton from "@material-ui/core/IconButton"
// import Typography from "@material-ui/core/Typography"
// import { AiOutlineClose } from "react-icons/ai"
// import Slide from "@material-ui/core/Slide"

import Video from "../components/Video"
import { wordCut, pathClean } from "../utility"

// const useStyles = makeStyles(theme => ({
//   appBar: {
//     position: "relative",
//   },
//   title: {
//     marginLeft: theme.spacing(2),
//     flex: 1,
//     color: "white",
//   },
// }))
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />
// })

const WorkDetail = ({ data, location }) => {
  // const classes = useStyles()

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
        <main className="work workdetail">
          <section>
            <h2>{title}</h2>
            <div style={{ marginBottom: "30px" }}>
              <Img
                className="interestimg"
                fluid={featureImage.childImageSharp.fluid}
              />

              {excerpt}
            </div>
            <div style={{ clear: "both" }}>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
            <div id="showyoutube">
              {videoSourceURL && (
                <Video videoSrcURL={videoSourceURL} videoTitle={videoTitle} />
              )}
            </div>
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
              <div className="content">
                <a href={github} target="showsite" title={github}>
                  {wcut(github)}
                </a>
              </div>
              <h6>npm</h6>
              <div className="content">
                <a href={npmorg} target="showsite" title={npmorg}>
                  {wcut(npmorg)}
                </a>
              </div>
              <h6>demo</h6>
              <div className="content">
                <a href={demo} target="showsite" title={demo}>
                  {wcut(demo)}
                </a>
              </div>
              <h6>youtube</h6>
              <div className="content">
                <a href="#showyoutube">{videoTitle}</a>
              </div>
            </div>
          </section>
        </main>
      </Layout>
      {/* <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <AiOutlineClose />
            </IconButton>
            <Typography variant="h6" className={classes.title}></Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        {loading ? (
          <div className="spin">
            <Spin size="large" />
          </div>
        ) : null}
        <iframe
          src={path}
          onLoad={() => setLoading(false)}
          loading="lazy"
          width="100%"
          height="800px"
          frameBorder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </Dialog> */}
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
