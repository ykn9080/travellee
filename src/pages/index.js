import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Img from "gatsby-image"
import { Button } from "antd"
import { FaSearchPlus } from "react-icons/fa"
import { wordCut } from "../utility"
import { useIntl } from "react-intl"
import { LocalizedLink as Link, LocalesList } from "gatsby-theme-i18n"

export default function Home({ data }) {
  const intl = useIntl()
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  }
  const works = data.allFile.nodes
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
          <div className="slidercontainer">
            <Slider {...settings}>
              {works.map(({ childMdx: wk }) => {
                const work = wk.frontmatter
                console.log(wk)
                return (
                  <>
                    <h4>{work.title}</h4>
                    <div className="gridtwo">
                      <article>
                        <div className="gridtwo30">
                          <p>{wordCut(work.excerpt, 40, "", "...")}</p>
                        </div>
                      </article>
                      <Link to={`/works/${work.slug}`} key={work.title}>
                        <Img
                          style={{
                            margin: "1rem",
                            maxHeight: "calc(70vh - 4rem)",
                          }}
                          imgStyle={{ objectFit: "contain" }}
                          fluid={work.thumb.childImageSharp.fluid}
                        />
                        <div style={{ textAlign: "right", marginTop: 10 }}>
                          <Button>View Detail </Button>
                        </div>
                      </Link>
                    </div>
                  </>
                )
              })}

              {/* <div className="gridtwo">
                <article>
                  <h4>Dashboard</h4>
                  <div className="gridtwo30">
                    <p>
                      Chart, Table, 이미지 등을 자유롭게 배치할 수 있다.
                      주제별로 여러개의 Dashboard를 만들수 있다.
                    </p>
                  </div>
                </article>
                <div>
                  <Link key="11" to={`/works/dashboard`}>
                    <StaticImage
                      src="../images/work/dashboard_view.png"
                      alt="project image"
                      placeholder="tracedSVG"
                    ></StaticImage>
                  </Link>
                  <div style={{ textAlign: "right", marginTop: 10 }}>
                    <Link key="1" to={`/works/dashboard`}>
                      <Button>View Detail </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <StaticImage
                  src="../images/project/project-image02.png"
                  className="img-fluid"
                  alt="project image"
                  placeholder="tracedSVG"
                  layout="fullWidth"
                ></StaticImage>
              </div>

              <div>
                <StaticImage
                  src="../images/project/project-image03.png"
                  className="img-fluid"
                  alt="project image"
                  placeholder="tracedSVG"
                  layout="fullWidth"
                ></StaticImage>
              </div>

              <div>
                <StaticImage
                  src="../images/project/project-image04.png"
                  className="img-fluid"
                  alt="project image"
                  placeholder="tracedSVG"
                  layout="fullWidth"
                ></StaticImage>
              </div>

              <div>
                <StaticImage
                  src="../images/project/project-image05.png"
                  className="img-fluid"
                  alt="project image"
                  placeholder="tracedSVG"
                  layout="fullWidth"
                ></StaticImage>
              </div> */}
            </Slider>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query Myslick($locale: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "works" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      nodes {
        childMdx {
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
          }
        }
      }
    }
  }
`
