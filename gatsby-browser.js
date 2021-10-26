import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { ThemeProvider } from "theme-ui"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"
import { MdxLink } from "gatsby-theme-i18n"
import { getCookie } from "./src/utility"

/* eslint-disable */

const component = {
  a: MdxLink,
  pre: props => {
    const className = props.children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : "js"
        }
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: "20px",
              lineHeight: 1.4,
              fontFamily: "sudo",
              fontSize: 14,
            }}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
}
export const wrapRootElement = ({ element }) => {
  const theme1 = {
    main: "mediumseagreen",
  }
  return (
    <ThemeProvider theme={theme1}>
      <MDXProvider components={component}>{element}</MDXProvider>
    </ThemeProvider>
  )
}

const i18nConfig = require("./i18n/config.json")
export const onClientEntry = () => {
  const langs = i18nConfig.map(c => c.code)
  let userLang = navigator.language.substr(0, 2)

  if (getCookie("mylanguage")) userLang = getCookie("mylanguage")
  if (userLang === "ko") userLang = ""
  if (
    langs.includes(userLang) &&
    !window.location.pathname.startsWith(`/${userLang}/`)
  ) {
    window.location.pathname = `/${userLang}${window.location.pathname}`
  }
}
