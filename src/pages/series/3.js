import { graphql } from "gatsby"
import React from "react"
import MainLayout from "../../components/mainLayout"
import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

const GridGallery = ({ data }) => {
  const images = data.images.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: node.childImageSharp.thumb.originalName,
  }))

  return (
    <MainLayout title="Series 3">
      <h2>Series 3 here.</h2>
      <Gallery images={images} />
    </MainLayout>
  )
}

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
              originalName
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default GridGallery
