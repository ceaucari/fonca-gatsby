import React from "react"
import MainLayout from "../../components/mainLayout"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Img from "gatsby-image"

// export default function Series1() {
const Series1 = ({ data }) => {
  const images = data.images.edges.map(({ node }) => ({
    ...node.childImageSharp,
    // caption: node.childImageSharp.thumb.originalName,
  }))
  console.log(images)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <MainLayout title="Series 1">
      <h2 className="text-2xl">Serie 1</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <div className="m-20">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Img
                fluid={image.full}
                alt="Main image"
                imgStyle={{ objectFit: "contain" }}
              />
              <div className="slide-caption text-center">SOME TEXT HERE</div>
            </div>
          ))}
        </Slider>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </p>
    </MainLayout>
  )
}

export default Series1

export const query = graphql`
  query Serie1Gallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "serie1" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
