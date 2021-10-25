import * as React from "react"
import { useLocalization } from "gatsby-theme-i18n"

const Example = () => {
  const { locale, config, defaultLang } = useLocalization()

  return (
    <div>
      <div>Current locale: {locale}</div>
      <div>Current defaultLang: {defaultLang}</div>
      <pre>{JSON.stringify(config, null, 2)}</pre>
    </div>
  )
}

export default Example
