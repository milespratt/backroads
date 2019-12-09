import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, i) => {
          return (
            <AniLink fade key={i} to={link.path}>
              {link.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((icon, i) => {
          return (
            <a
              href={icon.url}
              key={i}
              rel="noopener noreferrer"
              target="_blank"
            >
              {icon.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Solus Travel {new Date().getFullYear()} all rights
        reserved
      </div>
    </footer>
  )
}
