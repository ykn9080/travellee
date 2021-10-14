import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import {mdx} from '@mdx-js/react'
import theme from 'prism-react-renderer/themes/vsDark'

export default ({children, className}) => {
  const language = className?.replace(/language-/, '') || "javascript"


  return (
    <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px',lineHeight: 1.4,fontFamily: "sudo",fontSize:14}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}