import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import img from "../images/connectBcg.jpeg"
import Img from "gatsby-image"

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

function Images() {
  const data = useStaticQuery(getImages)
  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} className="basic" alt="" />
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Img fluid={data.fixed.childImageSharp.fluid} />
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 95%;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  article {
    border: 3px solid tomato;
    border-radius: 3px;
    padding: 1rem 1rem;
  }
  .basic {
    width: 100%;
  }
`

export default Images
