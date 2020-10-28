import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import MainLayout from "../components/mainLayout"

const styles = {
  image: {
    width: "500px",
  },
}

export default ({ data }) => (
  <MainLayout title="The new old faces">
    {/* <h1>HOME</h1> */}
    {/* <Img
      fluid={data.file.childImageSharp.fluid}
      style={styles.image}
      alt="Main image"
    /> */}
    <Img fixed={data.file.childImageSharp.fixed} />
  </MainLayout>
)

export const query = graphql`
  # query {
  #   file(relativePath: { eq: "main.jpeg" }) {
  #     childImageSharp {
  #       fluid(maxWidth: 500, quality: 100) {
  #         ...GatsbyImageSharpFluid
  #         ...GatsbyImageSharpFluidLimitPresentationSize
  #       }
  #     }
  #   }
  # }
  query {
    file(relativePath: { eq: "main.jpeg" }) {
      childImageSharp {
        fixed(width: 500, height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`