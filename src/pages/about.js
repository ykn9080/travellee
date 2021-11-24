import React, { useEffect } from "react"
import Breadcrumb from "../components/BreadCrumb"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "react-intl"
import { MultiPhrase } from "../utility"
import "../css/observer.css"

export const About = ({ location }) => {
  const intl = useIntl()
  function beTouching(entries, ob) {
    //entries all 30 paragraphs
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("intersecting")
        //console.log(entry.target);
        //console.log(entry.time, entry.intersectionRatio);
        entry.target.classList.add("active")
        //ob.unobserve(entry.target);
      } else {
        entry.target.classList.remove("active")
      }
    })
  }
  const handleContentLoaded = () => {
    let options = {
      root: null,
      rootMargin: "-250px -50px",
      threshold: 0.05,
    }
    let observer = new IntersectionObserver(beTouching, options)

    document.querySelectorAll(".container p").forEach(p => {
      observer.observe(p)
      //console.log("watching", p.textContent)
    })
  }
  useEffect(() => {
    handleContentLoaded()
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
          <section className="container">
            <p>{intl.formatMessage({ id: "resume" })}</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </section>
          <div class="cover">&nbsp;</div>
        </main>
      </Layout>
    </>
  )
}

export default About
