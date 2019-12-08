import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
export default function Header() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteData)
  return (
    <div>
      <h1>title: {siteMetadata.title}</h1>
      <h2>author: {siteMetadata.author}</h2>
      <h3>description: {siteMetadata.description}</h3>
      <h4>best foods: {siteMetadata.bestFood.join(", ")}</h4>
    </div>
  )
}
