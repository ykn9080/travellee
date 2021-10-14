import React, { useState } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Img from "gatsby-image"
import * as styles from "../css/workdetail.module.css"

import "../css/antd.css"
import { Button } from "antd"
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

const WorkDetail = ({ data }) => {
  const classes = useStyles()
  const { title, excerpt, featureImage, videoSourceURL, videoTitle } =
    data.mdx.frontmatter
  console.log(data.mdx.frontmatter.videoSrcURL)
  //const pathToImage = getImage(image)
  const [open, setOpen] = useState(false)
  const path = "http://imcmaster.iptime.org:7000"
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Layout>
        <SEO title={title} />
        <main className={styles.work}>
          <div></div>
          <section>
            <h2>{title}</h2>
            <div>{excerpt}</div>
            <Img fluid={featureImage.childImageSharp.fluid} />
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </section>
          <section>
            {path && (
              <Button type="primary" onClick={handleClickOpen}>
                Show Demo
              </Button>
            )}
            <Video videoSrcURL={videoSourceURL} videoTitle={videoTitle} />
          </section>

          {/* <div className="recipe-page">
             <div style={{ marginBottom: 10 }}>
              <TagWork tagtitle={title} />
            </div> 
            <section className="recipe-hero">
              <article>
                <h2>{title}</h2>
                {path && (
                  <Button type="primary" onClick={handleClickOpen}>
                    Show Demo
                  </Button>
                )}
                <p>{description.description}</p> 
              </article>
               <GatsbyImage
                image={pathToImage}
                alt={title}
                className="about-img"
              />
            </section>
          </div>
          <div>{code && <Code text={code?.code} />}</div> */}
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
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <iframe
          src={path}
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
        excerpt
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
