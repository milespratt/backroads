import React from "react"
import TourList from "./TourList"
import { useStaticQuery, graphql } from "gatsby"

const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          days
          price
          contentful_id
          slug
          country
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Tours() {
  const { tours } = useStaticQuery(getTours)
  return (
    <div>
      <TourList tours={tours} />
    </div>
  )
}
