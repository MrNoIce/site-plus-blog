import React from "react"
import Layout from "../components/layout/layout"
import ContactForm from "../components/forms/ContactForm"
import ProjectCard from "../components/projects/projectcard"
import Resume from "../components/resume/resume"



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