import React from "react"
import Breadcrumb from "../components/BreadCrumb"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "react-intl"

export const About = ({ location }) => {
  const intl = useIntl()
  return (
    <Layout>
      <Seo title="About me" />
      <Breadcrumb location={location} />
      <div className="headtitle">
        <h3 style={{ fontWeight: 900 }}>
          {intl.formatMessage({ id: "about-head" })}
        </h3>
        <h5>{intl.formatMessage({ id: "about-sub" })}</h5>
      </div>
      <div className="bodycontent">
        <div>
          {intl
            .formatMessage({ id: "about-body" })
            .split("^")
            .map(line => {
              return <p>{line}</p>
            })}
        </div>
        <StaticImage
          src="../images/yknam1.jpg"
          className="img-fluid"
          alt="myself"
          width={400}
          placeholder="tracedSVG"
        ></StaticImage>
      </div>
    </Layout>
  )
}

export default About
