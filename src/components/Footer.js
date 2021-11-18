import React, { useState } from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

const Footer = () => {
  const intl = useIntl()
  const [show, setShow] = useState(false)

  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <LocalizedLink to="/">
          <span
            style={{
              fontFamily: "Yeseva One",
              color: "white",
              fontSize: 30,
            }}
          >
            Young
          </span>
        </LocalizedLink>

        <p class="footer-links">
          <LocalizedLink
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </LocalizedLink>

          <LocalizedLink
            to="/works"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            works
          </LocalizedLink>
          <LocalizedLink
            to="/interests"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            interests
          </LocalizedLink>

          <LocalizedLink
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </LocalizedLink>
        </p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>{intl.formatMessage({ id: "address" })}</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p> {intl.formatMessage({ id: "phone" })}</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:ykn9080@empal.com">ykn9080@empal.com</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span> {intl.formatMessage({ id: "about-me" })}</span>
          {intl.formatMessage({ id: "about-me-content" })}
        </p>

        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
