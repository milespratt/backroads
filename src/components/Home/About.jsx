import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

export default function About() {
  return (
    <section className={styles.about}>
      <Title big title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="" />
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
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}
