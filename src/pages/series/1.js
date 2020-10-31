import { graphql } from "gatsby"
import React from "react"
import MainLayout from "../../components/mainLayout"
import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

export const query = graphql`
  query ImagesSeries1 {
    galleryImages: allFile(
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

const Series1 = ({ data }) => {
  const images = data.galleryImages.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: node.childImageSharp.thumb.originalName,
  }))

  return (
    <MainLayout title="Series 3">
      <h2>Serie 1</h2>
      <div className="pl-2">
        <Gallery images={images} />
      </div>
    </MainLayout>
  )
}

export default Series1
