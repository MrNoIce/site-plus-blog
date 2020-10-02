import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/form"
import ProjectCard from "../components/projectcard"
import Resume from "../components/resume"



const IndexPage = () => {
  return (
    <Layout>
      <ProjectCard />
      <Resume />
      <ContactForm />
    </Layout>
  )
}
export default IndexPage