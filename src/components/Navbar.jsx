import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo.svg"
export default function Navbar() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)
  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="hb hill" />
          <button onClick={toggleMenu} type="button" className={styles.logoBtn}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isMenuExpanded
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((link, i) => {
            return (
              <li key={i}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((icon, index) => {
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                href={icon.url}
              >
                {icon.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
