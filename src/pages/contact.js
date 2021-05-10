import React from "react"
import PropTypes from "prop-types"
import Obfuscate from "react-obfuscate"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/form"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      Feel free to contact me by email: <Obfuscate email={"email"} /> or use the
      form below.
      <ContactForm />
      <Bio />
    </Layout>
  )
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Contact
