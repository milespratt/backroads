import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import styles from "../css/error.module.css"
export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Looks like you're lost">
          <Link className="btn-white" to="/">
            GO home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
