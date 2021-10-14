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
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Articles {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: "/works/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/work-detail.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
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
