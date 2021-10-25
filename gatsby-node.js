const path = require("path")

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         components: path.resolve(__dirname, "src/components"),
//         css: path.resolve(__dirname, "src/css"),
//         pages: path.resolve(__dirname, "src/pages"),
//         images: path.resolve(__dirname, "src/images"),
//         template: path.resolve(__dirname, "src/template"),
//         works: path.resolve(__dirname, "src/works"),
//       },
//     },
//   })
// }
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const template = require.resolve(`./src/templates/work-detail.js`)
  const result = await graphql(`
    {
      contents: allFile(
        filter: { sourceInstanceName: { in: ["works", "interests"] } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              slug
              type
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  const contentList = result.data.contents.nodes
  console.log(contentList)
  contentList.forEach(({ childMdx: node }) => {
    console.log(node.frontmatter.slug)
    return createPage({
      path: `${node.frontmatter.type}s/${node.frontmatter.slug}`,
      component: template,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  // data.allMdx.nodes.forEach(node => {
  //   console.log(node, node.fields.locale)
  //   let locale = ""
  //   if (node.fields.locale) locale = "/en"
  //   return actions.createPage({
  //     path: `${locale}/${node.frontmatter.type}s/${node.frontmatter.slug}`,
  //     component: path.resolve(
  //       `./src/templates/work-detail.js`
  //       // `./src/templates/${node.frontmatter.type}-detail.js`
  //     ),
  //     context: {
  //       slug: node.slug,
  //     },
  //   })
  // })
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     query GetRecipes {
//       allContentfulRecipe {
//         nodes {
//           content {
//             tags
//           }
//         }
//       }
//     }
//   `)

//   result.data.allContentfulRecipe.nodes.forEach(recipe => {
//     recipe.content.tags.forEach(tag => {
//       const tagSlug = slugify(tag, { lower: true })
//       createPage({
//         path: `/tags/${tagSlug}`,
//         component: path.resolve(`src/templates/tag-template.js`),
//         context: {
//           tag: tag,
//         },
//       })
//     })
//   })
// }
