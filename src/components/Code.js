import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  atomDark,
  rdark,
  prism,
  dark,
  docco,
} from "react-syntax-highlighter/dist/cjs/styles/prism"

// export const options = {
//   renderMark: {
//     [MARKS.CODE]: code,
//   },

//   renderText: text => {
//     return text.split("\n").reduce((children, textSegment, index) => {
//       return [...children, index > 0 ? <br key={index} /> : "", textSegment]
//     }, [])
//   },
// }

export default function code({ text }) {
  if (!text) return null
  const mtext = text.split("$$$$$")
  mtext.shift()
  return mtext.map((k, i) => {
    const ttx = k.split("\n")

    const fline = ttx.shift()
    const ffline = fline.split("|")
    ffline.shift()
    const language = ffline.shift()
    const head = ffline.shift()
    const desc = ffline.shift()

    return (
      <>
        {head && <h4>{head}</h4>}
        <p>{desc}</p>
        <Highlight language={language} text={ttx.join("\n")} />
      </>
    )
  })
}

const Highlight = ({ text, language }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={dark}
      //style={rdark}
      toolbar={true}
      lineProps={{
        style: {
          wordBreak: "break-all",
          whiteSpace: "pre-wrap",
          paddingBottom: 8,
          scroll: "auto",
        },
      }}
      wrapLines={true}
    >
      {text}
    </SyntaxHighlighter>
  )
}
