import React from "react"
import Title from "../Title"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../../css/about.module.css"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const getImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "grand_tour.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function About() {
  const data = useStaticQuery(getImage)
  return (
    <section className={styles.about}>
      <Title big title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={data.aboutImage.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            temporibus accusamus quia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quis
            ut ex.
          </p>
          <AniLink fade to="/tours" className="btn-primary">
            read more
          </AniLink>
        </article>
      </div>
    </section>
  )
}
