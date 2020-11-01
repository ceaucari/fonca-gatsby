import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import MainLayout from "../components/mainLayout"

export default ({ data }) => (
  <MainLayout>
    <div className="block text-center mt-10">
      <Img fixed={data.file.childImageSharp.fixed} alt="Main image" />
    </div>
  </MainLayout>
)

export const query = graphql`
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
