import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"
import FeaturedTours from "../components/Home/FeaturedTours"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <StyledHero img={data.defaultBcg.childImageSharp.fluid} home="true">
      <Banner
        title="Solus Travel"
        info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, veniam eligendi! Nam."
      >
        <AniLink fade to="/tours" className="btn-white">
          View Tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "grand_tour.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
