import React from "react"
import Breadcrumb from "../components/BreadCrumb"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

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
        <p>{intl.formatMessage({ id: "about-sub" })}</p>
      </div>
      <div className="bodycontent"></div>
    </Layout>
  )
}

export default About
