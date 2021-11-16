import React from "react"
import { graphql } from "gatsby"
import _ from "lodash"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"
import { FaSearchPlus } from "react-icons/fa"
import { useIntl } from "react-intl"
import WorkList from "../components/WorkList"
import { MultiPhrase } from "../utility"

export default function Home({ data }) {
  const intl = useIntl()
  const works = _.filter(data.allMdx.nodes, o => {
    return o.frontmatter.type === "work"
  })
  const interests = _.filter(data.allMdx.nodes, o => {
    return o.frontmatter.type === "interest"
  })
  console.log(works)
  return (
    <Layout>
      <SEO title="Home " />
      <div className="hero">
        <StaticImage
          src="../images/yknam1.jpg"
          alt="mypic"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        ></StaticImage>
        <div className="hero-container">
          <div className="hero-text">
            <h1>Fullstack Developer</h1>
            <h2>MEAN stack, Docker</h2>
          </div>
        </div>
      </div>
      <main>
        <section className="gridtwo">
          <article>
            <h1 className="animated animated-text">
              <span>{intl.formatMessage({ id: "mypositioning" })}</span>
              <div className="animated-info">
                <span className="animated-item">Web Mobile</span>
                <span className="animated-item">MERN SQL</span>
                <span className="animated-item">Docker CI/CD</span>
              </div>
            </h1>
            <MultiPhrase id="index-introduce" />
          </article>
          <div className="expandimg">
            <StaticImage
              src="../images/My_Skills.png"
              className="img-fluid"
              alt="myskill"
              placeholder="tracedSVG"
            ></StaticImage>
            <div>
              <FaSearchPlus />
              <span>mouse over to enlarge</span>
            </div>
          </div>
        </section>

        <section>
          <header>
            <h1>{intl.formatMessage({ id: "work-head" })}</h1>
            <p>{intl.formatMessage({ id: "index-head" })}</p>
          </header>
          <WorkList data={works} type="work" />
        </section>
        <section>
          <header>
            <h1>{intl.formatMessage({ id: "interest-head" })}</h1>
            <p>{intl.formatMessage({ id: "index-interest" })}</p>
          </header>
          <WorkList data={interests} type="interest" />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query Myslick($locale: String!) {
    allMdx(filter: { fields: { locale: { eq: $locale } } }) {
      nodes {
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
          type
        }
      }
    }
  }
`
