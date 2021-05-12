import React from "react"
import Layout from "../components/layout/layout"
import ProjectCard from "../components/projects/projectcard"
import servicerequest from "../../content/pages/servicerequest"



const Projects = () => {
  return (
    <Layout>
        <h3>{"<"}software_development_projects{"/>"}</h3>
      <ProjectCard />
    </Layout>
  )
}
export default Projects