import React from "react"
import PropTypes from "prop-types"
import Obfuscate from "react-obfuscate"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import ContactForm from "../components/forms/ContactForm"
import config from "../../content/meta/config"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <h3> Feel free to contact me by email:{" "}
      <Obfuscate email={config.contactEmail} /> or use the form below. </h3>
      <ContactForm />
    </Layout>
  )
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Contact
