// DEPENDENCIES
import React from "react"

// COMPONENTS
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "./layout.css"

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
