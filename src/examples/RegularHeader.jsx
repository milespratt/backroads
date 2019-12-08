import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
        author
        description
        bestFood
      }
    }
  }
`

export default function RegularHeader() {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        console.log(data)
        return <h1>{data.site.siteMetadata.title}</h1>
      }}
    />
  )
}
