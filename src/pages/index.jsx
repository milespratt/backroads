import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Smells"
        info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, veniam eligendi! Nam."
      >
        <Link to="/tours" className="btn-white">
          View Tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
