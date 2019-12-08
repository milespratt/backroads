import React from "react"
import { Link } from "gatsby"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, i) => {
          return (
            <Link key={i} to={link.path}>
              {link.text}
            </Link>
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
        copyright &copy; hummingbird hill LLC {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}