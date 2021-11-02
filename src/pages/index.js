import React from "react"
import { graphql } from "gatsby"
import _ from "lodash"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"
import { FaSearchPlus } from "react-icons/fa"
import { useIntl } from "react-intl"
import WorkList from "../components/WorkList"

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
      <header className="hero">
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
            <h4>MEAN stack, Docker</h4>
          </div>
        </div>
      </header>
      <main className="page">
        <section className="gridtwo">
          <article>
            <h3 className="animated animated-text">
              <span className="mr-2">
                {intl.formatMessage({ id: "mypositioning" })} -
              </span>
              <div className="animated-info">
                <span className="animated-item">Web Mobile</span>
                <span className="animated-item">MERN SQL</span>
                <span className="animated-item">Docker CI/CD</span>
              </div>
            </h3>
            <p>
              web개발분야는 빠르게 변화하고 있고, 새롭게 습득할 지식도
              기하급수적으로 늘어나는 것같다. 수많은 분야중 필수적인 기술을
              취사선택하는 것이 더욱 중요한 일이 되었다.
            </p>
            <p>
              나의 관심분야는 MERN stack과 관련된 CI/CD기술과 npm module이나
              docker-compose 등 쉽게 모듈화하여 재사용하는 것이다.{" "}
            </p>
          </article>
          <div className="expandimg">
            <StaticImage
              src="../images/My_Skills.png"
              className="img-fluid"
              alt="myskill"
              placeholder="tracedSVG"
            ></StaticImage>
          </div>
        </section>
        <div className="enlargeicon">
          <FaSearchPlus />
          <span>mouse over to enlarge</span>
        </div>

        <section>
          <article>
            <h3>개발 모음</h3>
            <p>
              프로젝트의 산출물 중 재활용할만한 모듈을 isolation한 샘플. npm
              publish한 것과 github에서 clone해서 사용하는 것이 섞여 있음.
            </p>
          </article>
          <WorkList data={works} type="work" />
        </section>
        <section>
          <article>
            <h3>관심분야</h3>
            <p>
              MERN stack개발에 필요한 제반 기술들. Documentation, S3 file server
              등 개발관련 기술과 Docker, CI/CD 등 DevOps관련 기술들
            </p>
          </article>
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
