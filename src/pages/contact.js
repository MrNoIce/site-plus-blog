import React from "react"
import PropTypes from "prop-types"
import Obfuscate from "react-obfuscate"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/form"
import config from "../../content/meta/config"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h3> Feel free to contact me by email:{" "}
      <Obfuscate email={config.contactEmail} /> or use the form below. </h3>
      <ContactForm />
      <Bio />
    </Layout>
  )
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Contact
