import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/tour.module.css"
import { graphql } from "gatsby"

export default function tours({ data }) {
  return (
    <Layout>
      <StyledHero img={data.tourBcg.childImageSharp.fluid} />
      {data.allContentfulTour.nodes.map(tour => {
        return (
          <div className={styles.tour} key={tour.id}>
            {tour.name}
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    tourBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allContentfulTour {
      nodes {
        name
        price
        country
        start
        days
        journey {
          day
          info
          id
        }
        id
      }
    }
  }
`
