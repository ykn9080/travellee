import React, { useEffect } from "react"
import Breadcrumb from "../components/BreadCrumb"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "react-intl"
import { MultiPhrase } from "../utility"
import commentBox from "commentbox.io"

export const About = ({ location }) => {
  const intl = useIntl()

  useEffect(() => {
    commentBox("5717890573533184-proj", { className: "commentbox" })
  }, [])
  return (
    <>
      <Layout>
        <Seo title="About me" />
        <Breadcrumb location={location} />
        <main>
          <header>
            <h1>{intl.formatMessage({ id: "about-head" })}</h1>
            <p>{intl.formatMessage({ id: "about-sub" })}</p>
          </header>
          <section className="gridtwo">
            <MultiPhrase id="about-body" />

            <StaticImage
              src="../images/yknam1.jpg"
              className="img-fluid"
              alt="myself"
              width={400}
              placeholder="tracedSVG"
            ></StaticImage>
          </section>
        </main>
        commentbox
        <div className="commentbox" />
      </Layout>
    </>
  )
}

export default About
