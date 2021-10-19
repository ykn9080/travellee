import React, { useState } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Img from "gatsby-image"
import * as styles from "../css/workdetail.module.css"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import { Button, Spin } from "antd"
import Code from "../components/Code"
// import TagWork from "../components/TagWork"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Slide from "@material-ui/core/Slide"
import { AiOutlineClose } from "react-icons/ai"
import Video from "../components/Video"

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: "white",
  },
}))
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const WorkDetail = ({ data, location }) => {
  const classes = useStyles()
  const {
    title,
    slug,
    excerpt,
    featureImage,
    videoSourceURL,
    videoTitle,
    github,
    npmorg,
    demo,
  } = data.mdx.frontmatter
  //const pathToImage = getImage(image)
  const [open, setOpen] = useState(false)
  const [path, setPath] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClickOpen = url => {
    if (!url) return
    setOpen(true)
    setLoading(true)
    setPath(url)
  }
  var newwindow
  function poptastic(url, name) {
    newwindow = window.open(url, name, "height=800,width=1200")
    if (window.focus) {
      newwindow.focus()
    }
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Layout>
        <SEO title={title} />
        <Breadcrumb location={location} crumbLabel={slug} />
        <main className={styles.work}>
          <section>
            <h2>{title}</h2>
            <div>{excerpt}</div>
            <Img fluid={featureImage.childImageSharp.fluid} />
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            <div id="showyoutube">
              <Video videoSrcURL={videoSourceURL} videoTitle={videoTitle} />
            </div>
          </section>
          <section>
            <div className={styles.toc}>
              <h6>github</h6>
              <div className={styles.content}>
                <a
                  href={github}
                  target="popup"
                  onClick={() => {
                    poptastic(github, "github")
                  }}
                >
                  {github}
                </a>
              </div>
              <h6>npm</h6>
              <div className={styles.content}>
                <a
                  href={npmorg}
                  target="popup"
                  onClick={() => {
                    poptastic(npmorg, "npmorg")
                  }}
                >
                  {npmorg}
                </a>
              </div>
              <h6>demo</h6>
              <div className={styles.content}>
                <a onClick={() => handleClickOpen(demo)}>{demo}</a>
              </div>
              <h6>youtube</h6>
              <div className={styles.content}>
                <a href="#showyoutube">{videoTitle}</a>
              </div>
            </div>
          </section>
        </main>
      </Layout>
      <Dialog
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
      </Dialog>
    </>
  )
}

export const query = graphql`
  query DetailWork($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
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
