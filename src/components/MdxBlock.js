import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock" // The wrapper you created in step 2
const components = {
  pre: CodeBlock,
}
const MdxBlock = props => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{props.mdx.body}</MDXRenderer>
    </MDXProvider>
  )
}
export default MdxBlock
