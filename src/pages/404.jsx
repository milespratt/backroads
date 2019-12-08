import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import styles from "../css/error.module.css"
export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Looks like you're lost">
          <AniLink paintDrip className="btn-white" to="/">
            Go home
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
