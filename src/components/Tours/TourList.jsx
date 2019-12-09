import React, { useState, useEffect } from "react"
import styles from "../../css/items.module.css"
import Tour from "./Tour"
import Title from "../Title"

export default function TourList({ tours }) {
  const [unortedTours, setUnsortedTours] = useState([])
  const [sortedTours, setSortedTours] = useState([])

  useEffect(() => {
    setUnsortedTours(tours.edges)
    setSortedTours(tours.edges)
  }, [tours])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
    </section>
  )
}
